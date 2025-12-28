function clockAngle(s: string): number {
    const [hours, minutes] = s.split(':').map(Number);
  
    const h = hours % 12;
    const m = minutes;
    const minuteAngle = m * 6;
  
    const hourAngle = (h * 30) + (m * 0.5);
  
    let angle = Math.abs(hourAngle - minuteAngle);
  
    if (angle > 180) {
      angle = 360 - angle;
    }
  
    return angle;
  }
  
  console.log(clockAngle("06:00").toFixed(3));
  console.log(clockAngle("03:15").toFixed(3));
  console.log(clockAngle("00:00").toFixed(3));
  console.log(clockAngle("12:30").toFixed(3));
  console.log(clockAngle("09:45").toFixed(3));