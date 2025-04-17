
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center text-center p-6">
      <Image src="/herzl.png" alt="HerzlBot" width={100} height={100} className="rounded-full shadow-lg" />
      <h1 className="text-4xl font-bold mt-6 text-blue-800 font-[Comic_Sans_MS]">ברוכים הבאים להרצל־בוט</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-xl">
        הצ'אטבוט שיילמד אותך מתוך הסיכומים שלך – עם שירים, גרפים, כרטיסיות, תמונות ומשחקים. מותאם אישית לסגנון הלמידה שלך.
      </p>
      <Link href="/quiz">
        <button className="mt-8 bg-blue-600 text-white text-lg py-3 px-6 rounded-full hover:bg-blue-700 shadow-lg transition">
          התחל ללמוד עכשיו
        </button>
      </Link>
    </div>
  )
}
