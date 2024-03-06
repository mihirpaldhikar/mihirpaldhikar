/*
 * Copyright (c) Mihir Paldhikar
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { JSX } from "react";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <nav
      className={
        "fixed h-16 min-w-full justify-between border-b border-b-gray-300 bg-white/50 px-5 py-3 flex items-center"
      }
    >
      <div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            y="2.5"
            width="63"
            height="63"
            rx="7.5"
            stroke="black"
            strokeWidth="5"
          />
          <path
            d="M24.14 53V39H28.02L33.62 48.14H31.58L37.02 39H40.9L40.94 53H36.64L36.6 45.48H37.28L33.56 51.74H31.48L27.6 45.48H28.44V53H24.14ZM43.222 53V39H49.962C51.2687 39 52.3954 39.2133 53.342 39.64C54.302 40.0667 55.042 40.68 55.562 41.48C56.082 42.2667 56.342 43.2 56.342 44.28C56.342 45.36 56.082 46.2933 55.562 47.08C55.042 47.8667 54.302 48.48 53.342 48.92C52.3954 49.3467 51.2687 49.56 49.962 49.56H45.842L47.942 47.54V53H43.222ZM47.942 48.06L45.842 45.92H49.662C50.3154 45.92 50.7954 45.7733 51.102 45.48C51.422 45.1867 51.582 44.7867 51.582 44.28C51.582 43.7733 51.422 43.3733 51.102 43.08C50.7954 42.7867 50.3154 42.64 49.662 42.64H45.842L47.942 40.5V48.06Z"
            fill="black"
          />
        </svg>
      </div>
      <div>
        <Link
          href={"mailto:contact@mihirpaldhikar.com"}
          className={"bg-blue-600 rounded-lg px-3 py-2 text-white font-medium"}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
