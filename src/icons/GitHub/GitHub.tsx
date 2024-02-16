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
import { IconProps } from "@interfaces/index";

export default function GitHub({
  size = 30,
  color = "#000",
}: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9_99)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.5 0C38.0313 0 49 11.2453 49 25.1197C49 36.2157 41.9881 45.6287 32.2592 48.9533C31.017 49.2008 30.576 48.4163 30.576 47.7475C30.576 46.9194 30.6054 44.2147 30.6054 40.8533C30.6054 38.5111 29.8214 36.9824 28.9419 36.2033C34.398 35.581 40.131 33.4566 40.131 23.8085C40.131 21.0645 39.1804 18.8254 37.6075 17.0663C37.8623 16.4317 38.7026 13.8767 37.3674 10.4173C37.3674 10.4173 35.3143 9.74419 30.6372 12.9929C28.6797 12.4367 26.5825 12.1569 24.5 12.1471C22.4175 12.1569 20.3228 12.4367 18.3677 12.9929C13.6857 9.74419 11.6277 10.4173 11.6277 10.4173C10.2974 13.8767 11.1377 16.4317 11.3901 17.0663C9.8245 18.8254 8.86656 21.0645 8.86656 23.8085C8.86656 33.4321 14.5873 35.5891 20.0288 36.2236C19.3281 36.8508 18.6935 37.9573 18.473 39.5816C17.0765 40.2235 13.5289 41.3344 11.3435 37.4953C11.3435 37.4953 10.0475 35.0817 7.58765 34.9053C7.58765 34.9053 5.1989 34.8736 7.42105 36.4318C7.42105 36.4318 9.0258 37.2035 10.1405 40.1068C10.1405 40.1068 11.5787 44.5902 18.3946 43.0712C18.4069 45.1708 18.4289 47.1497 18.4289 47.7475C18.4289 48.4114 17.9781 49.1885 16.7555 48.9557C7.01924 45.636 0 36.2182 0 25.1197C0 11.2453 10.9711 0 24.5 0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_9_99">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
