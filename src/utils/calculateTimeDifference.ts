export const calculateTimeDifference = (selectedTime: string) => {
  const now = new Date();
  const reminderTime = new Date();
  const [time, modifier] = selectedTime.split(' '); // Split the time and the AM/PM part
  const [hr, minutes] = time.split(':').map(Number);
  let hour = hr;

  // Convert to 24-hour time if 'PM' is set
  if (modifier === 'PM' && hour < 12) {
    hour += 12;
  }
  // Convert to 24-hour time format if 'AM' is set and it's 12 AM
  if (modifier === 'AM' && hour === 12) {
    hour = 0;
  }
  reminderTime.setHours(hour, minutes, 0, 0);

  if (reminderTime <= now) {
    reminderTime.setDate(now.getDate() + 1);
  }
  return reminderTime.getTime() - now.getTime();
};