
import Link from 'next/link'

const courses = [
  { id: 'history1', title: 'היסטוריה - העליות לארץ ישראל', description: 'מבוסס על סיכום לבגרות' },
  { id: 'zionism', title: 'הציונות ומנהיגיה', description: 'מסמך עם מידע על הרצל, הצהרת בלפור, ועוד' },
]

export default function CoursesPage() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">קורסים זמינים</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-bold text-blue-700">{course.title}</h2>
            <p className="text-gray-600 mt-1">{course.description}</p>
            <Link href={`/chat?course=${course.id}`}>
              <button className="mt-4 button-rounded">התחל ללמוד</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
