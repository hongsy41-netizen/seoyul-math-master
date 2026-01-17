// 부호를 자연스럽게 표현하는 헬퍼 함수
function formatSign(num, position = 'middle') {
  if (position === 'first') {
    // 식의 맨 앞: 양수면 그냥 숫자, 음수면 -숫자
    return num >= 0 ? String(num) : String(num);
  } else {
    // 식의 중간: 양수면 + 숫자, 음수면 - |숫자|
    return num >= 0 ? `+ ${num}` : `- ${Math.abs(num)}`;
  }
}

console.log('Test cases:');
console.log('formatSign(7, "middle"):', formatSign(7, 'middle'));  // + 7
console.log('formatSign(-7, "middle"):', formatSign(-7, 'middle')); // - 7
console.log('formatSign(7, "first"):', formatSign(7, 'first'));   // 7
console.log('formatSign(-7, "first"):', formatSign(-7, 'first'));  // -7
