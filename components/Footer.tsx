import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">About CircuitScope</h2>
            <p className="text-sm">
              CircuitScope is your go-to source for the latest tech insights, trends, and innovations. Explore the
              world of technology with us.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Image src="/image/X_logo.jpg.webp" alt='' height={25} width={25}/>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .592 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.324 0 2.464.099 2.797.143v3.243l-1.92.001c-1.506 0-1.797.716-1.797 1.764v2.31h3.594l-.468 3.622h-3.126V24h6.126c.73 0 1.323-.592 1.323-1.324V1.325C24 .593 23.408 0 22.675 0z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.015 7.052.072 5.773.13 4.733.375 3.85.854 2.969 1.332 2.332 1.97 1.854 2.85.376 4.733.13 5.773.072 7.052.015 8.332 0 8.735 0 12c0 3.265.015 3.668.072 4.948.058 1.279.304 2.319.782 3.202.478.882 1.116 1.52 1.997 1.998.883.478 1.923.724 3.202.782C8.332 23.985 8.735 24 12 24c3.265 0 3.668-.015 4.948-.072 1.279-.058 2.319-.304 3.202-.782.882-.478 1.52-1.116 1.998-1.997.478-.883.724-1.923.782-3.202C23.985 15.668 24 15.265 24 12c0-3.265-.015-3.668-.072-4.948-.058-1.279-.304-2.319-.782-3.202-.478-.882-1.116-1.52-1.998-1.998-.883-.478-1.923-.724-3.202-.782C15.668.015 15.265 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.125a3.963 3.963 0 1 1 0-7.926 3.963 3.963 0 0 1 0 7.926zm6.406-11.845a1.44 1.44 0 1 0-.001 2.88 1.44 1.44 0 0 0 .001-2.88z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CircuitScope. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
