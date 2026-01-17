const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5173;

const ROOT = __dirname;
const STORAGE_DIR = path.join(ROOT, "storage");
const WRONG_PATH = path.join(STORAGE_DIR, "wrong_notes.json");
const LOG_PATH = path.join(STORAGE_DIR, "study_log.json");
const FIXED_DB_DIR = path.join(ROOT, "data", "fixed");

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function ensureFile(filePath, defaultValue) {
  ensureDir(path.dirname(filePath));
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2), "utf-8");
  }
}

function readJson(filePath, fallback) {
  try {
    ensureFile(filePath, fallback);
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return fallback;
  }
}

function writeJson(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

function safeFileName(key){
  // stable slug file name
  return String(key).replace(/[^a-zA-Z0-9._-]/g, '_');
}

app.use(express.json({ limit: "20mb" }));

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

// 정적 파일(PWA) 서빙
app.use(express.static(ROOT));

// ---- API: 오답 ----
app.get("/api/wrong-notes", (req, res) => {
  const data = readJson(WRONG_PATH, []);
  res.json({ ok: true, data });
});

app.post("/api/wrong-notes/append", (req, res) => {
  const item = req.body;
  if (!item || !item.problem) return res.status(400).json({ ok: false, message: "Invalid payload" });

  const data = readJson(WRONG_PATH, []);
  data.unshift({
    id: "W" + Date.now(),
    createdAt: new Date().toISOString(),
    ...item,
  });
  writeJson(WRONG_PATH, data);
  res.json({ ok: true });
});

app.post("/api/wrong-notes/clear", (req, res) => {
  writeJson(WRONG_PATH, []);
  res.json({ ok: true });
});

// ---- API: 학습 로그 ----
app.get("/api/study-log", (req, res) => {
  const data = readJson(LOG_PATH, []);
  res.json({ ok: true, data });
});

app.post("/api/study-log/append", (req, res) => {
  const item = req.body || {};
  const data = readJson(LOG_PATH, []);
  data.unshift({
    id: "L" + Date.now(),
    createdAt: new Date().toISOString(),
    ...item,
  });
  writeJson(LOG_PATH, data);
  res.json({ ok: true });
});

// ---- API: 고정 DB 저장/불러오기 ----
app.post('/api/fixed-db/save', (req,res)=>{
  const { unitId, db } = req.body || {};
  if(!unitId || !db) return res.status(400).json({ok:false, message:'unitKey/db required'});
  ensureDir(FIXED_DB_DIR);
  const fp = path.join(FIXED_DB_DIR, safeFileName(unitId) + '.json');
  writeJson(fp, db);
  res.json({ok:true});
});

app.get('/api/fixed-db/get', (req,res)=>{
  const unitId = req.query.unitId;
  if(!unitId) return res.status(400).json({ok:false, message:'unitKey required'});
  const fp = path.join(FIXED_DB_DIR, safeFileName(unitId) + '.json');
  if(!fs.existsSync(fp)) return res.json({ok:true, exists:false});
  const db = readJson(fp, null);
  res.json({ok:true, exists:true, db});
});

// SPA 새로고침 대응
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(ROOT, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Seoyul Math PWA running: http://localhost:${PORT}`);
});
