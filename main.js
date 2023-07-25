// ==UserScript==
// @name        Twitter Logo Improver
// @namespace   Violentmonkey Scripts
// @match       https://*twitter.com/*
// @grant       none
// @version     1.0.0
// @updateURL   https://raw.githubusercontent.com/Karusader/TwitterLogoImprover/main/VERSION
// @downloadURL https://raw.githubusercontent.com/Karusader/TwitterLogoImprover/main/main.js
// @author      Karusader
// @issues      https://github.com/Karusader/TwitterLogoImprover/issues
// @description X is a terrible name for a company
// @run-at document-idle
// ==/UserScript==



const letter = [];

//A
letter[0] = ["<svg width=\"38.3\" height=\"35.3\" viewBox=\"0 0 38.3 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 3.75 35.3 L 7 26.5 L 24.8 26.5 L 28.1 35.3 L 38.3 35.3 L 25.2 0 L 13.05 0 L 0 35.3 L 3.75 35.3 Z M 34.5 32.65 L 30.2 32.65 L 18.8 2.65 L 23.1 2.65 L 34.5 32.65 Z M 23.4 22.85 L 8.35 22.85 L 15.85 2.65 L 23.4 22.85 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","A"]
//B
letter[1] = ["<svg width=\"32.151\" height=\"35.301\" viewBox=\"0 0 32.151 35.301\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 21.25 16.7 L 21.05 16.65 C 27.149 15.946 30.43 14.098 30.812 9.619 A 10.816 10.816 0 0 0 30.85 8.7 C 30.85 3.557 27.083 0.203 20.693 0.009 A 19.513 19.513 0 0 0 20.1 0 L 0 0 L 0 35.3 L 20.5 35.3 A 18.707 18.707 0 0 0 25.081 34.781 C 29.604 33.635 32.15 30.617 32.15 26 C 32.15 19.02 27.29 17.901 21.663 16.782 A 715.352 715.352 0 0 0 21.25 16.7 Z M 7.55 32.65 L 3.05 32.65 L 3.05 2.65 L 7.55 2.65 L 7.55 32.65 Z M 20 18.65 L 20 32.65 L 10.65 32.65 L 10.65 18.15 L 10.85 18.15 A 203.327 203.327 0 0 1 12.054 18.153 C 15.982 18.177 17.248 18.323 19.828 18.63 A 7616.828 7616.828 0 0 0 20 18.65 Z M 19.95 2.75 L 19.95 14.75 A 11.927 11.927 0 0 1 19.716 14.775 C 18.714 14.877 15 15.2 10.6 15.2 L 10.6 2.65 L 19.95 2.75 Z M 23 32.35 L 23 19.4 A 5.942 5.942 0 0 1 25.967 20.756 C 27.231 21.834 28.005 23.384 28.258 24.933 A 6.935 6.935 0 0 1 28.35 26.05 A 7.923 7.923 0 0 1 28.054 28.301 C 27.502 30.166 26.204 31.314 24.361 31.971 A 10.629 10.629 0 0 1 23 32.35 Z M 23 13.95 L 23 3.15 A 4.986 4.986 0 0 1 26.895 7.183 A 6.874 6.874 0 0 1 27.05 8.65 C 27.05 11.326 25.857 12.809 23.875 13.639 A 8.842 8.842 0 0 1 23 13.95 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","B"]
//C
letter[2] = ["<svg width=\"34.452\" height=\"36.604\" viewBox=\"0 0 34.452 36.604\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 30.902 11.003 L 33.952 9.403 A 14.792 14.792 0 0 0 23.413 0.567 A 22.296 22.296 0 0 0 18.252 0.003 C 6.752 0.003 0.002 6.603 0.002 18.103 A 21.872 21.872 0 0 0 1.468 26.31 C 4.117 32.881 10.204 36.603 18.502 36.603 A 21.993 21.993 0 0 0 25.938 35.383 A 16.148 16.148 0 0 0 34.402 28.653 L 34.452 28.553 L 31.452 26.503 A 15.349 15.349 0 0 1 24.104 32.821 C 22.311 33.564 20.424 33.953 18.602 33.953 A 13.766 13.766 0 0 1 17.585 33.912 C 15.681 33.77 13.347 33.26 12.252 32.503 L 12.152 32.403 L 12.152 4.003 A 7.089 7.089 0 0 1 13.254 3.578 C 14.153 3.305 15.328 3.087 16.737 2.978 A 26.232 26.232 0 0 1 18.752 2.903 A 15.081 15.081 0 0 1 21.643 3.157 C 25.831 3.974 27.834 6.731 30.902 11.003 Z M 9.102 5.503 L 9.102 30.753 A 5.741 5.741 0 0 1 7.213 29.082 C 5.439 26.768 4.3 22.904 3.989 19.696 A 17.643 17.643 0 0 1 3.902 18.003 A 21.709 21.709 0 0 1 4.326 13.598 C 4.66 11.988 5.18 10.574 5.85 9.346 A 12.205 12.205 0 0 1 9.102 5.503 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","C"]
//D
letter[3] = ["<svg width=\"35.303\" height=\"35.303\" viewBox=\"0 0 35.303 35.303\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 17.4 0.001 L 0 0.001 L 0 35.301 L 17.4 35.301 A 23.557 23.557 0 0 0 24.819 34.216 C 30.272 32.407 33.736 28.369 34.881 22.34 A 25.415 25.415 0 0 0 35.3 17.601 A 23.047 23.047 0 0 0 34.262 10.414 C 32.497 5.032 28.519 1.671 22.611 0.484 A 26.476 26.476 0 0 0 17.4 0.001 Z M 22.9 3.801 L 22.9 31.651 L 22.7 31.701 C 21.073 32.329 18.325 32.548 14.719 32.619 A 212.179 212.179 0 0 1 10.6 32.651 L 10.6 2.651 L 10.8 2.651 A 285.228 285.228 0 0 1 13.284 2.66 C 18.587 2.707 20.585 2.939 22.582 3.679 A 15.289 15.289 0 0 1 22.9 3.801 Z M 7.55 32.651 L 3.05 32.651 L 3.05 2.651 L 7.55 2.651 L 7.55 32.651 Z M 26.1 30.351 L 26.1 5.301 L 26.25 5.401 A 10.482 10.482 0 0 1 29.823 9.676 C 30.64 11.362 31.173 13.331 31.39 15.434 A 21.156 21.156 0 0 1 31.5 17.601 C 31.5 22.573 29.815 27.157 26.808 29.786 A 9.916 9.916 0 0 1 26.1 30.351 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","D"]
//E
letter[4] = ["<svg width=\"24.7\" height=\"35.3\" viewBox=\"0 0 24.7 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 24.7 35.3 L 24.7 31.95 L 10.6 31.95 L 10.6 18.9 L 22.4 18.9 L 22.4 15.55 L 10.6 15.55 L 10.6 3.35 L 24.7 3.35 L 24.7 0 L 0 0 L 0 35.3 L 24.7 35.3 Z M 7.55 32.65 L 3.05 32.65 L 3.05 2.65 L 7.55 2.65 L 7.55 32.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","E"]
//F
letter[5] = ["<svg width=\"24.4\" height=\"35.3\" viewBox=\"0 0 24.4 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 10.6 35.3 L 10.6 19.5 L 22 19.5 L 22 16.15 L 10.6 16.15 L 10.6 3.35 L 24.4 3.35 L 24.4 0 L 0 0 L 0 35.3 L 10.6 35.3 Z M 7.55 32.65 L 3.05 32.65 L 3.05 2.65 L 7.55 2.65 L 7.55 32.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","F"]
//G
letter[6] = ["<svg width=\"35.802\" height=\"36.603\" viewBox=\"0 0 35.802 36.603\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 32.702 8.502 L 32.852 8.652 L 35.352 6.402 A 17.72 17.72 0 0 0 27.061 1.039 C 25.537 0.573 23.854 0.258 21.979 0.106 A 33.237 33.237 0 0 0 19.302 0.002 A 23.769 23.769 0 0 0 10.356 1.611 C 4.696 3.906 0.96 8.585 0.162 15.177 A 22.679 22.679 0 0 0 0.002 17.902 C 0.002 28.17 6.325 34.728 15.411 36.258 A 25.546 25.546 0 0 0 19.652 36.602 A 28.126 28.126 0 0 0 24.879 36.157 A 19.801 19.801 0 0 0 35.702 30.152 L 35.802 30.052 L 35.802 18.802 L 19.602 18.802 L 19.602 21.852 L 25.402 21.852 L 25.402 33.052 C 23.152 33.752 22.202 33.952 20.202 33.952 A 21.914 21.914 0 0 1 18.285 33.866 C 16.054 33.669 13.72 33.13 12.252 32.202 L 12.152 32.102 L 12.152 4.002 A 24.586 24.586 0 0 1 12.448 3.872 C 13.82 3.279 15.607 2.685 18.97 2.654 A 30.177 30.177 0 0 1 19.252 2.652 C 24.802 2.652 29.302 4.802 32.702 8.502 Z M 9.102 5.702 L 9.102 30.302 C 5.902 28.802 3.902 22.452 3.902 18.102 A 19.465 19.465 0 0 1 4.492 13.212 C 5.307 10.064 6.927 7.572 9.102 5.702 Z M 32.802 21.852 L 32.802 29.452 A 8.655 8.655 0 0 1 31.095 30.814 C 29.999 31.504 28.903 31.962 28.565 32.097 A 11.928 11.928 0 0 1 28.552 32.102 L 28.552 21.852 L 32.802 21.852 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","G"]
//H
letter[7] = ["<svg width=\"34.65\" height=\"35.3\" viewBox=\"0 0 34.65 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 0 35.3 L 10.6 35.3 L 10.6 19 L 24.05 19 L 24.05 35.3 L 34.65 35.3 L 34.65 0 L 24.05 0 L 24.05 15.3 L 10.6 15.3 L 10.6 0 L 0 0 L 0 35.3 Z M 7.55 32.65 L 3.05 32.65 L 3.05 2.65 L 7.55 2.65 L 7.55 32.65 Z M 31.6 32.65 L 27.1 32.65 L 27.1 2.65 L 31.6 2.65 L 31.6 32.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","H"]
//I
letter[8] = ["<svg width=\"10.6\" height=\"35.3\" viewBox=\"0 0 10.6 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 10.6 35.3 L 10.6 0 L 0 0 L 0 35.3 L 10.6 35.3 Z M 7.55 32.65 L 3.05 32.65 L 3.05 2.65 L 7.55 2.65 L 7.55 32.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","I"]
//J
letter[9] = ["<svg width=\"24.651\" height=\"35.952\" viewBox=\"0 0 24.651 35.952\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 24.651 21.2 L 24.651 0 L 14.051 0 L 14.051 33.1 C 13.301 33.1 13.001 33.15 12.801 33.15 A 11.473 11.473 0 0 1 9.079 32.598 C 5.342 31.319 3.651 27.841 3.651 22.4 L 3.651 22.25 L 0.001 22.25 C 0.042 29.789 2.399 34.172 8.036 35.509 A 18.301 18.301 0 0 0 12.251 35.95 C 21.501 35.95 24.651 31.45 24.651 21.2 Z M 21.601 2.65 L 21.601 20.9 A 56.693 56.693 0 0 1 21.531 23.921 C 21.267 28.826 20.18 30.969 17.101 32.15 L 17.101 2.65 L 21.601 2.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","J"]
//K
letter[10] = ["<svg width=\"37.15\" height=\"35.3\" viewBox=\"0 0 37.15 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 10.6 35.3 L 10.6 21.8 L 15.5 17.7 L 26.05 35.3 L 37.15 35.3 L 23.05 11.3 L 36.55 0 L 31.15 0 L 10.6 17.35 L 10.6 0 L 0 0 L 0 35.3 L 10.6 35.3 Z M 7.55 32.65 L 3.05 32.65 L 3.05 2.65 L 7.55 2.65 L 7.55 32.65 Z M 32.3 32.65 L 27.45 32.65 L 17.7 15.85 L 20.9 13.15 L 32.3 32.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","K"]
//L
letter[11] = ["<svg width=\"24.7\" height=\"35.3\" viewBox=\"0 0 24.7 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 24.7 35.3 L 24.7 31.95 L 10.6 31.95 L 10.6 0 L 0 0 L 0 35.3 L 24.7 35.3 Z M 7.55 32.65 L 3.05 32.65 L 3.05 2.65 L 7.55 2.65 L 7.55 32.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","L"]
//M
letter[12] = ["<svg width=\"43.25\" height=\"35.3\" viewBox=\"0 0 43.25 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 3.7 35.3 L 3.7 10.1 L 13.9 35.3 L 22.75 35.3 L 32.65 10.8 L 32.65 35.3 L 43.25 35.3 L 43.25 0 L 33.45 0 L 21.7 29.05 L 10 0 L 0 0 L 0 35.3 L 3.7 35.3 Z M 20.1 32.65 L 15.8 32.65 L 3.6 2.65 L 7.9 2.65 L 20.1 32.65 Z M 40.2 32.65 L 35.7 32.65 L 35.7 2.65 L 40.2 2.65 L 40.2 32.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","M"]
//N
letter[13] = ["<svg width=\"33.15\" height=\"35.3\" viewBox=\"0 0 33.15 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 0 35.3 L 3.7 35.3 L 3.7 7.35 L 23.05 35.3 L 33.15 35.3 L 33.15 0 L 29.45 0 L 29.45 27.95 L 10.1 0 L 0 0 L 0 35.3 Z M 29.3 32.65 L 24.55 32.65 L 3.8 2.65 L 8.55 2.65 L 29.3 32.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","N"]
//O
letter[14] = ["<svg width=\"38.405\" height=\"36.605\" viewBox=\"0 0 38.405 36.605\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 19.203 36.602 A 23.507 23.507 0 0 0 27.961 35.047 C 34.477 32.437 38.403 26.646 38.403 18.452 A 19 19 0 0 0 35.814 8.573 C 32.605 3.23 26.641 0.002 19.203 0.002 A 21.11 21.11 0 0 0 9.027 2.455 C 4.053 5.173 0.733 9.998 0.109 16.162 A 21.27 21.27 0 0 0 0.003 18.302 A 20.602 20.602 0 0 0 1.661 26.749 C 4.46 33.018 10.663 36.602 19.203 36.602 Z M 26.153 4.002 L 26.153 32.602 L 26.053 32.702 A 4.393 4.393 0 0 1 25.233 33.082 C 23.755 33.616 21.311 33.952 19.303 33.952 A 25.961 25.961 0 0 1 17.411 33.887 C 15.959 33.781 14.868 33.553 13.96 33.267 A 14.97 14.97 0 0 1 12.253 32.602 L 12.253 4.002 L 12.353 3.902 A 3.521 3.521 0 0 1 13.075 3.546 C 14.404 3.043 16.7 2.71 18.644 2.659 A 19.445 19.445 0 0 1 19.153 2.652 C 22.853 2.652 24.653 3.302 26.153 4.002 Z M 9.203 6.002 L 9.203 30.752 L 9.053 30.702 A 5.939 5.939 0 0 1 6.813 28.764 C 5.004 26.328 3.903 22.304 3.903 18.602 A 20.701 20.701 0 0 1 4.252 14.666 C 4.609 12.817 5.231 11.257 6.072 9.856 A 19.559 19.559 0 0 1 9.203 6.002 Z M 29.203 30.752 L 29.203 6.002 A 6.716 6.716 0 0 1 31.741 8.279 C 33.467 10.719 34.503 14.485 34.503 18.102 C 34.503 21.727 33.767 24.383 32.477 26.629 A 19.795 19.795 0 0 1 29.203 30.752 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","O"]
//P
letter[15] = ["<svg width=\"32.254\" height=\"35.3\" viewBox=\"0 0 32.254 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 10.6 35.3 L 10.6 20.9 L 17.65 20.9 C 27.45 20.9 32.25 17.55 32.25 10.65 A 10.5 10.5 0 0 0 31.001 5.39 C 29.406 2.58 26.284 0.835 21.635 0.235 A 30.81 30.81 0 0 0 17.7 0 L 0 0 L 0 35.3 L 10.6 35.3 Z M 7.55 32.65 L 3.05 32.65 L 3.05 2.65 L 7.55 2.65 L 7.55 32.65 Z M 16.7 2.7 L 20.05 2.95 L 20.05 17.65 A 1.917 1.917 0 0 1 19.626 17.776 C 19.329 17.83 18.923 17.85 18.25 17.85 A 202.27 202.27 0 0 0 17.514 17.852 C 15.355 17.86 12.208 17.897 10.793 17.9 A 80.853 80.853 0 0 1 10.6 17.9 L 10.6 2.65 L 10.8 2.65 C 10.987 2.65 12.919 2.607 13.295 2.601 A 4.427 4.427 0 0 1 13.35 2.6 A 70.195 70.195 0 0 1 14.443 2.609 C 15.491 2.625 16.363 2.663 16.7 2.7 Z M 23.1 17.25 L 23.1 3.5 L 23.25 3.5 C 26.45 3.95 28.5 7.05 28.5 10.6 C 28.5 14.618 26.623 16.375 23.815 17.093 A 11.293 11.293 0 0 1 23.1 17.25 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","P"]
//Q
letter[16] = ["<svg width=\"38.405\" height=\"40.202\" viewBox=\"0 0 38.405 40.202\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 35.953 39.852 L 36.103 39.802 L 37.453 36.602 A 76.734 76.734 0 0 1 36.498 36.877 C 34.735 37.371 33.803 37.533 32.549 37.55 A 17.38 17.38 0 0 1 32.303 37.552 A 5.493 5.493 0 0 1 27.653 35.354 A 4.809 4.809 0 0 1 27.553 35.202 L 27.453 35.052 A 20.912 20.912 0 0 0 33.183 31.631 C 35.715 29.433 37.343 26.615 38.029 22.959 A 23.334 23.334 0 0 0 38.403 18.652 C 38.403 9.255 32.834 2.353 24.095 0.498 A 23.552 23.552 0 0 0 19.203 0.002 A 21.292 21.292 0 0 0 9.516 2.179 C 3.629 5.166 0.003 11.026 0.003 18.502 A 20.208 20.208 0 0 0 1.507 26.49 C 3.614 31.423 7.829 34.624 13.472 35.932 A 27.627 27.627 0 0 0 19.703 36.602 C 21.753 36.602 23.303 36.402 24.953 35.952 L 25.153 35.902 A 8.051 8.051 0 0 0 30.409 40.024 A 8.282 8.282 0 0 0 32.153 40.202 A 18.748 18.748 0 0 0 32.889 40.187 C 33.812 40.15 34.943 40.046 35.953 39.852 Z M 26.153 4.002 L 26.153 32.602 L 26.053 32.452 A 82.57 82.57 0 0 0 25.293 31.326 C 23.799 29.165 22.507 27.726 20.194 27.382 A 7.739 7.739 0 0 0 19.053 27.302 A 6.304 6.304 0 0 0 16.673 27.725 C 15.458 28.214 14.544 29.117 13.821 30.372 A 13.299 13.299 0 0 0 12.753 32.852 L 12.253 32.602 L 12.253 4.002 L 12.353 3.902 A 3.521 3.521 0 0 1 13.075 3.547 C 14.404 3.043 16.699 2.71 18.644 2.659 A 19.445 19.445 0 0 1 19.153 2.652 C 22.853 2.652 24.653 3.302 26.153 4.002 Z M 9.203 6.002 L 9.203 30.752 L 9.053 30.702 A 6.16 6.16 0 0 1 6.701 28.607 C 5.201 26.5 4.225 23.304 3.97 20.107 A 20.799 20.799 0 0 1 3.903 18.452 A 18.826 18.826 0 0 1 4.548 13.395 A 15.225 15.225 0 0 1 9.203 6.002 Z M 29.203 30.752 L 29.203 6.002 C 32.257 7.459 34.251 12.36 34.481 17.261 A 20.162 20.162 0 0 1 34.503 18.202 A 18.4 18.4 0 0 1 33.687 23.791 A 15.946 15.946 0 0 1 29.203 30.752 Z M 23.903 33.452 L 23.753 33.502 A 21.289 21.289 0 0 1 20.403 33.923 A 26.096 26.096 0 0 1 19.153 33.952 C 17.819 33.952 17.041 33.878 15.735 33.666 A 76.96 76.96 0 0 1 15.053 33.552 L 15.053 33.352 C 15.253 31.052 17.103 29.452 19.103 29.452 C 21.253 29.452 22.553 30.802 23.903 33.452 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","Q"]
//R
letter[17] = ["<svg width=\"33.45\" height=\"35.35\" viewBox=\"0 0 33.45 35.35\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 10.6 35.3 L 10.6 21.05 L 13.15 21.05 L 22.15 35.3 L 33.45 35.3 L 24.25 20.8 A 14.412 14.412 0 0 0 28.705 18.705 C 30.95 17.04 32.3 14.528 32.3 10.5 A 11.194 11.194 0 0 0 31.371 5.814 C 29.686 2.12 25.793 0.186 20.406 0.013 A 25.074 25.074 0 0 0 19.6 0 L 0 0 L 0 35.35 L 10.6 35.3 Z M 7.55 32.65 L 3.05 32.65 L 3.05 2.65 L 7.55 2.65 L 7.55 32.65 Z M 20.1 18.4 L 10.6 18.4 L 10.6 2.65 L 20.1 2.65 L 20.1 18.4 Z M 23.85 32.65 L 16.6 21.05 L 21.2 21.05 L 28.45 32.65 L 23.85 32.65 Z M 23.1 18.05 L 23.1 3.05 C 26.95 3.9 28.6 6.8 28.6 10.7 A 9.473 9.473 0 0 1 28.112 13.837 C 27.404 15.858 25.926 17.282 23.692 17.907 A 8.706 8.706 0 0 1 23.1 18.05 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","R"]
//S
letter[18] = ["<svg width=\"33.503\" height=\"36.702\" viewBox=\"0 0 33.503 36.702\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 29.15 8.801 L 29.3 9.001 L 31.9 6.751 A 23.834 23.834 0 0 0 27.311 2.783 C 25.131 1.382 22.748 0.518 19.884 0.173 A 25.38 25.38 0 0 0 16.85 0.001 C 7.65 0.001 1.9 4.501 1.9 11.751 C 1.9 23.127 17.18 22.323 21.795 26.562 A 3.709 3.709 0 0 1 23.1 29.401 C 23.1 32.351 20.35 33.901 16.4 33.901 C 11.6 33.901 6.6 31.401 3 26.851 L 2.9 26.751 L 0 28.801 A 19.782 19.782 0 0 0 12.289 36.294 A 27.302 27.302 0 0 0 17.15 36.701 C 21.933 36.701 25.729 35.775 28.455 34.114 A 10.034 10.034 0 0 0 33.5 25.151 C 33.5 12.763 17.879 13.514 13.329 9.567 A 3.216 3.216 0 0 1 12.1 7.051 A 3.794 3.794 0 0 1 13.461 4.249 C 14.059 3.713 14.832 3.286 15.733 3.027 A 7.301 7.301 0 0 1 17.75 2.751 A 10.017 10.017 0 0 1 19.803 2.983 C 22.797 3.616 26.458 5.547 29.15 8.801 Z M 22.85 34.051 L 23 33.901 A 8.831 8.831 0 0 0 25.188 31.343 A 6.192 6.192 0 0 0 26 28.351 C 26 18.501 4.95 22.051 4.95 11.451 A 8.677 8.677 0 0 1 5.771 7.635 C 6.58 5.956 7.956 4.643 9.754 3.647 A 15.733 15.733 0 0 1 12.1 2.601 L 12 2.701 C 10.2 4.801 9.15 5.951 9.15 8.201 A 5.427 5.427 0 0 0 12.225 12.995 C 17.919 16.418 29.59 16.511 30.269 24.505 A 8.809 8.809 0 0 1 30.3 25.251 C 30.3 29.851 27.45 32.551 22.85 34.051 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","S"]
//T
letter[19] = ["<svg width=\"34.7\" height=\"35.3\" viewBox=\"0 0 34.7 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 12.05 3.7 L 12.05 35.3 L 22.65 35.3 L 22.65 3.7 L 34.7 3.7 L 34.7 0 L 0 0 L 0 3.7 L 12.05 3.7 Z M 19.6 3.7 L 19.6 32.65 L 15.1 32.65 L 15.1 3.7 L 19.6 3.7 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","T"]
//U
letter[20] = ["<svg width=\"32.805\" height=\"35.952\" viewBox=\"0 0 32.805 35.952\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 32.803 20.6 L 32.803 0.05 L 29.103 0.05 L 29.103 19.25 C 29.103 28.347 27.192 32.69 18.428 33.157 A 31.465 31.465 0 0 1 16.753 33.2 A 33.011 33.011 0 0 1 15.888 33.19 C 14.277 33.148 13.193 32.964 10.753 32.45 L 10.603 32.4 L 10.603 0 L 0.003 0 L 0.003 19.25 A 28.897 28.897 0 0 0 0.621 25.605 C 2.176 32.458 6.793 35.782 15.894 35.944 A 39.863 39.863 0 0 0 16.603 35.95 C 28.503 35.95 32.803 31.35 32.803 20.6 Z M 7.553 31.05 L 7.353 30.95 A 6.627 6.627 0 0 1 4.979 28.407 C 3.728 26.197 3.053 22.944 3.053 18.95 L 3.053 2.65 L 7.553 2.65 L 7.553 31.05 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","U"]
//V
letter[21] = ["<svg width=\"38.3\" height=\"35.3\" viewBox=\"0 0 38.3 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 13.1 35.3 L 25.25 35.3 L 38.3 0 L 34.55 0 L 22.45 32.65 L 10.2 0 L 0 0 L 13.1 35.3 Z M 19.5 32.65 L 15.2 32.65 L 3.8 2.65 L 8.1 2.65 L 19.5 32.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","V"]
//W
letter[22] = ["<svg width=\"51.65\" height=\"35.3\" viewBox=\"0 0 51.65 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 10.3 35.3 L 19.5 35.3 L 25.9 9.1 L 32.7 35.3 L 41.9 35.3 L 51.65 0 L 48.2 0 L 40.65 27.45 L 33.65 0 L 24.4 0 L 18 27.2 L 10 0 L 0 0 L 10.3 35.3 Z M 16.65 32.65 L 12.45 32.65 L 3.7 2.65 L 7.85 2.65 L 16.65 32.65 Z M 39 32.65 L 34.8 32.65 L 27.2 2.65 L 31.35 2.65 L 39 32.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","W"]
//X
//nah
//Y
letter[23] = ["<svg width=\"38.9\" height=\"35.3\" viewBox=\"0 0 38.9 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 14.25 21.9 L 14.25 35.3 L 24.7 35.3 L 24.7 21.9 L 38.9 0 L 34.7 0 L 23.15 17.7 L 11.4 0 L 0 0 L 14.25 21.9 Z M 21.65 20.65 L 21.65 32.65 L 17.2 32.65 L 17.2 21.3 L 5 2.65 L 9.85 2.65 L 21.65 20.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","Y"]
//Z
letter[24] = ["<svg width=\"31.85\" height=\"35.3\" viewBox=\"0 0 31.85 35.3\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 31.85 35.3 L 31.85 31.6 L 11.7 31.6 L 31.8 3.45 L 31.8 0 L 1.95 0 L 1.95 3.35 L 20.2 3.35 L 0 31.85 L 0 35.3 L 31.85 35.3 Z M 28.9 2.65 L 7.6 32.65 L 2.85 32.65 L 24.1 2.65 L 28.9 2.65 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>","Z"]
//The Cool S
letter[25] = ["<svg width=\"11\" height=\"35.65\" viewBox=\"0 0 11 35.65\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"svgGroup\" stroke-linecap=\"round\" fill-rule=\"evenodd\" font-size=\"9pt\" stroke=\"#ffffff\" stroke-width=\"0.25mm\" fill=\"#ffffff\" style=\"stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff\"><path d=\"M 10.35 14.25 L 8.1 17.3 L 5.85 14.25 L 5.85 7.45 L 5.15 7.45 L 5.15 14.5 L 10.35 21.4 L 10.35 28.1 L 5.5 34.55 L 0.65 28.1 L 0.65 21.4 L 2.9 18.4 L 5.15 21.4 L 5.15 28.2 L 5.85 28.2 L 5.85 21.15 L 0.65 14.25 L 0.65 7.6 L 5.5 1.1 L 10.35 7.6 L 10.35 14.25 Z M 11 7.35 L 5.5 0 L 0 7.35 L 0 14.5 L 2.5 17.85 L 0 21.15 L 0 28.3 L 5.5 35.65 L 11 28.3 L 11 21.15 L 8.5 17.8 L 11 14.5 L 11 7.35 Z\" vector-effect=\"non-scaling-stroke\"/></g></svg>"]


logo = document.getElementsByClassName("r-yyyyoo")

//console.log(logo[0].outerHTML)

function randomizeLogo(){
  num = letter[Math.floor(Math.random()*letter.length)]
  //for (let i = 0; i < logo.length; i++) {
  //  logo[i].outerHTML = num[0];
  //}
  //replaced every SVG on the page, very funny, but i couldnt get the side bar to load back in :(
  logo[0].outerHTML = num[0];
}

randomizeLogo()



