
export default function AchievementsPage() {
  const achievements = [
    { title: 'סיימת את נושא העלייה הראשונה', icon: '🌄' },
    { title: 'קיבלת תגובה עם שיר מותאם', icon: '🎵' },
    { title: 'שיחקת במשחק מילוי', icon: '🎮' },
    { title: 'נשמרו לך 3 כרטיסיות זיכרון', icon: '🧠' },
  ]

  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">הישגים שלך</h1>
      <ul className="space-y-4">
        {achievements.map((a, i) => (
          <li key={i} className="bg-white p-4 rounded shadow flex items-center space-x-4">
            <span className="text-3xl">{a.icon}</span>
            <span className="text-lg text-gray-700">{a.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
