
export default function About() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">על הרצל־בוט</h1>
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
        הרצל־בוט הוא צ'אטבוט חכם ללמידה מתוך סיכומים אישיים, מסמכים, ומערכי שיעור. הוא מתאים לתלמידים בכל הגילים, ומגיב לפי סגנון הלמידה המועדף:
        חזותי, מוזיקלי, מילולי, או אינטראקטיבי.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        הבוט יכול לענות עם:
        <ul className="list-disc list-inside mt-2">
          <li>שירים וחרוזים בעברית</li>
          <li>גרפים מאוירים</li>
          <li>תמונות בציור דיגיטלי</li>
          <li>כרטיסי זיכרון</li>
          <li>משחקי התאמה ומילוי</li>
        </ul>
      </p>
    </div>
  )
}
