import Link from "next/link";
import { Youtube, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-white rounded-sm flex items-center justify-center">
                <div className="h-4 w-4 bg-black rounded-sm"></div>
              </div>
              <span className="font-bold text-xl">MEKDIYE MEDIA</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              የኢትዮጵያ ቁጥር አንድ የመዝናኛ ሚዲያ ፕላትፎርም። ኮሜዲ፣ ዘፈን፣ ድራማ እና ሌሎች መዝናኛዎችን
              እናቀርባለን።
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">ፕሮግራሞች</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ኮሜዲ ሾው
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ሙዚቃ እና ዘፈን
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ቃለ መጠይቆች
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ልዩ ዝግጅቶች
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  የቀጥታ ስርጭት
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">ካምፓኒ</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ስለ እኛ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ያግኙን
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ስፖንሰርሺፕ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ቅሬታ ማቅረቢያ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  የስራ ዕድል
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">ተከታተሉን</h3>
            <div className="flex flex-col gap-4">
              <Link
                href="https://youtube.com/@mekdiyemedia"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400">
                ሁሉም ስርዓቶች በስራ ላይ ናቸው
              </span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
              <span>© 2024 Mekdiye Media. መብቱ በህግ የተጠበቀ ነው</span>
              <Link href="#" className="hover:text-white transition-colors">
                የግላዊነት ፖሊሲ
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                የአገልግሎት ውል
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
