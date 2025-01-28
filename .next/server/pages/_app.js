/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/theme.js":
/*!***************************!*\
  !*** ./contexts/theme.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ThemeProvider = ({ children  })=>{\n    const { 0: themeName , 1: setThemeName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const darkMediaQuery = window.matchMedia(\"(prefers-color-scheme: dark)\");\n        setThemeName(localStorage.getItem(\"themeName\") || (darkMediaQuery.matches ? \"dark\" : \"light\"));\n    }, []);\n    const toggleTheme = ()=>{\n        const name = themeName === \"dark\" ? \"light\" : \"dark\";\n        localStorage.setItem(\"themeName\", name);\n        setThemeName(name);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: [\n            {\n                themeName,\n                toggleTheme\n            }\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\super\\\\Documents\\\\VSCode\\\\Portfolio\\\\contexts\\\\theme.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\nThemeProvider.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBEO0FBQ3hCO0FBRWxDLE1BQU1JLFlBQVksaUJBQUdKLG9EQUFhLEVBQUU7QUFFcEMsTUFBTUssYUFBYSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDdEMsTUFBTSxLQUFDQyxTQUFTLE1BQUVDLFlBQVksTUFBSU4sK0NBQVEsQ0FBQyxPQUFPLENBQUM7SUFFbkRELGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU1RLGNBQWMsR0FBR0MsTUFBTSxDQUFDQyxVQUFVLENBQUMsOEJBQThCLENBQUM7UUFDeEVILFlBQVksQ0FDVkksWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQzlCSixDQUFBQSxjQUFjLENBQUNLLE9BQU8sR0FBRyxNQUFNLEdBQUcsT0FBTyxFQUM3QztJQUNILENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixNQUFNQyxXQUFXLEdBQUcsSUFBTTtRQUN4QixNQUFNQyxJQUFJLEdBQUdULFNBQVMsS0FBSyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU07UUFDcERLLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLFdBQVcsRUFBRUQsSUFBSSxDQUFDO1FBQ3ZDUixZQUFZLENBQUNRLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQscUJBQ0UsOERBQUNaLFlBQVksQ0FBQ2MsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBQztnQkFBRVosU0FBUztnQkFBRVEsV0FBVzthQUFFO1NBQUM7a0JBQ3ZEVCxRQUFROzs7OztpQkFDYSxDQUN6QjtBQUNILENBQUM7QUFFREQsYUFBYSxDQUFDZSxTQUFTLEdBQUc7SUFDeEJkLFFBQVEsRUFBRUgsbUVBQXlCO0NBQ3BDO0FBRXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhbmZvbGlvLy4vY29udGV4dHMvdGhlbWUuanM/YzhiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuY29uc3QgVGhlbWVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdGhlbWVOYW1lLCBzZXRUaGVtZU5hbWVdID0gdXNlU3RhdGUoJ2xpZ2h0JylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRhcmtNZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKVxyXG4gICAgc2V0VGhlbWVOYW1lKFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWVOYW1lJykgfHxcclxuICAgICAgICAoZGFya01lZGlhUXVlcnkubWF0Y2hlcyA/ICdkYXJrJyA6ICdsaWdodCcpXHJcbiAgICApXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IHRoZW1lTmFtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJ1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lTmFtZScsIG5hbWUpXHJcbiAgICBzZXRUaGVtZU5hbWUobmFtZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbeyB0aGVtZU5hbWUsIHRvZ2dsZVRoZW1lIH1dfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5UaGVtZVByb3ZpZGVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IHsgVGhlbWVQcm92aWRlciwgVGhlbWVDb250ZXh0IH1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsIlRoZW1lQ29udGV4dCIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInRoZW1lTmFtZSIsInNldFRoZW1lTmFtZSIsImRhcmtNZWRpYVF1ZXJ5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtYXRjaGVzIiwidG9nZ2xlVGhlbWUiLCJuYW1lIiwic2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/theme.js\n");

/***/ }),

/***/ "./data/portfolio.js":
/*!***************************!*\
  !*** ./data/portfolio.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about),\n/* harmony export */   \"contact\": () => (/* binding */ contact),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"skills\": () => (/* binding */ skills)\n/* harmony export */ });\nconst about = {\n    // each of these properties is optional - they can be left empty or deleted\n    // each element in the `description` array will be treated as a separate paragraph\n    name: \"Justin To\",\n    greetingEmoji: \"\\uD83D\\uDC4B\",\n    role: \"Software Developer\",\n    company: \"\",\n    description: [\n        \"As a passionate software, game, and web developer, I love making games for people to enjoy, intuitive and beutiful websites, and user-friendly useful apps. My goal is to create digital solutions that people love to use and that make a difference. Also interested in Cybersecurity and AI.\", \n    ],\n    resume: \"https://justinto.dev/resume.pdf\",\n    social: {\n        github: \"https://github.com/tocjustin\",\n        linkedin: \"https://www.linkedin.com/in/tojustin/\"\n    }\n};\nconst projects = [\n    // projects can be added and removed\n    // if the array is left empty, the \"Projects\" section won't render\n    // each element in each `description` array will be treated as a separate paragraph\n    {\n        thumbnail: \"images/placeholder-image.jpeg\",\n        name: \"Valiant\",\n        description: [\n            \"A first person tactile shooter game within Unreal Engine\", \n        ],\n        stack: [\n            \"C++\",\n            \"Lead Programmer\",\n            \"UE5\",\n            \"Git\",\n            \"Networking\",\n            \"UI\",\n            \"Gameplay\"\n        ],\n        livePreview: \"https://store.steampowered.com/app/2468650/Valiant/\"\n    },\n    {\n        thumbnail: \"images/placeholder-image.jpeg\",\n        name: \"Apocalypse Rising\",\n        description: [\n            \"A third person open world survival game within Unreal Engine\", \n        ],\n        stack: [\n            \"C++\",\n            \"Lead Programmer\",\n            \"UE5\",\n            \"Git\"\n        ],\n        livePreview: \"\"\n    },\n    {\n        thumbnail: \"images/placeholder-image.jpeg\",\n        name: \"Eternal Life\",\n        description: [\n            \"A top down MMO ARPG game within Unreal Engine\", \n        ],\n        stack: [\n            \"C++\",\n            \"Lead Programmer\",\n            \"UE5\",\n            \"Git\"\n        ],\n        livePreview: \"\"\n    },\n    {\n        thumbnail: \"images/placeholder-image.jpeg\",\n        name: \"Apothecary Night\",\n        description: [\n            \"A first person horror game within Unity\", \n        ],\n        stack: [\n            \"C#\",\n            \"Lead Programmer\",\n            \"Unity\",\n            \"Git\"\n        ],\n        livePreview: \"\"\n    },\n    {\n        thumbnail: \"images/placeholder-image.jpeg\",\n        name: \"Valoblox\",\n        description: [\n            \"A first person shooter game within Roblox Studio\", \n        ],\n        stack: [\n            \"Lua\",\n            \"Lead Programmer\",\n            \"Roblox Studio\",\n            \"SQL\"\n        ],\n        livePreview: \"https://www.roblox.com/games/9818210203/Nexus\"\n    },\n    {\n        thumbnail: \"images/placeholder-image.jpeg\",\n        name: \"Daydream\",\n        description: [\n            \"A productivity app within Android Studio\", \n        ],\n        stack: [\n            \"Kotlin\",\n            \"Android Studio\"\n        ],\n        sourceCode: \"https://github.com/tocjustin/Daydream\",\n        livePreview: \"\"\n    },\n    {\n        thumbnail: \"images/placeholder-image.jpeg\",\n        name: \"Sentinel\",\n        description: [\n            \"A discord bot to manage discord servers\", \n        ],\n        stack: [\n            \"Python\",\n            \"SQL\",\n            \"AWS\"\n        ],\n        livePreview: \"\"\n    },\n    /*{\r\n    thumbnail: 'images/placeholder-image.jpeg',\r\n    name: 'Utopia',\r\n    description: [\r\n      'An Instagram Clone built in React',\r\n    ],\r\n    stack: ['JavaScript', 'CSS', 'TypeScript', 'React'],\r\n    sourceCode: '',\r\n    livePreview: '',\r\n  },\r\n  {\r\n    thumbnail: 'images/placeholder-image.jpeg',\r\n    name: 'Nexus',\r\n    description: [\r\n      'An Amazon Clone built in Next.js',\r\n    ],\r\n    stack: ['JavaScript', 'CSS', 'TypeScript', 'React'],\r\n    sourceCode: '',\r\n    livePreview: '',\r\n  },*/ {\n        thumbnail: \"images/placeholder-image.jpeg\",\n        name: \"Auto Zone\",\n        description: [\n            \"A car buying website\", \n        ],\n        stack: [\n            \"JavaScript\",\n            \"CSS\",\n            \"TypeScript\",\n            \"React\"\n        ],\n        sourceCode: \"https://github.com/tocjustin/CarFinder\",\n        livePreview: \"carcenter.vercel.app\"\n    },\n    {\n        thumbnail: \"images/placeholder-image.jpeg\",\n        name: \"Anti-Phishing Outlook Extension\",\n        description: [\n            \"Designed and developed an Outlook add-in extension that enhances email security by detecting phishing emails\", \n        ],\n        stack: [\n            \"Python\",\n            \"JavaScript\",\n            \"CSS\",\n            \"HTML\"\n        ],\n        sourceCode: \"https://github.com/Dpenate-AD23/AntiPhish-Outlook\",\n        livePreview: \"\"\n    }, \n];\nconst skills = [\n    // skills can be added or removed\n    // if the array is left empty, the \"Skills\" section won't render\n    \"C++\",\n    \"C#\",\n    \"C\",\n    \"Lua\",\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"SQL\",\n    \"Git\", \n];\nconst contact = {\n    // the `email` property is optional - it can be left empty or deleted\n    // if so, the \"Contact\" section won't render\n    email: \"tocjustin@gmail.com\"\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLCtCQUErQjtRQUMxQ1YsSUFBSSxFQUFFO1FBQ05JLFdBQVcsRUFBRTs7U0FFWjtRQUNETyxLQUFLLEVBQUU7WUFBQyxRQUFRO1lBQUUsWUFBWTs7WUFBUztTQUFPO1FBQzlDRSxVQUFVO1FBQ1ZELFdBQVcsRUFBRSxFQUFFO0tBQ2hCO0NBQ0Y7QUFFRCxNQUFNRSxNQUFNLEdBQUc7SUFDYixpQ0FBaUM7SUFDakM7SUFDQTtJQUNBLElBQUk7SUFDSixHQUFHO0lBQ0gsS0FBSztJQUNMLE1BQU07SUFDTixLQUFLO0lBQ0wsWUFBWTtJQUNaLFlBQVk7SUFDWixPQUFPO0lBQ1AsS0FBSztJQUNMLEtBQUs7Q0FDTjtBQUVELE1BQU1DLE9BQU8sR0FBRztJQUNkO0lBQ0E7O0NBRUQ7QUFFRCxTQUFTaEIsS0FBSyxFQUFFVSxRQUFRLEVBQUVLLE1BQU0sRUFBRUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFuZm9saW8vLi9kYXRhL3BvcnRmb2xpby5qcz9kOGI0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFib3V0ID0ge1xyXG4gIC8vIGVhY2ggb2YgdGhlc2UgcHJvcGVydGllcyBpcyBvcHRpb25hbCAtIHRoZXkgY2FuIGJlIGxlZnQgZW1wdHkgb3IgZGVsZXRlZFxyXG4gIC8vIGVhY2ggZWxlbWVudCBpbiB0aGUgYGRlc2NyaXB0aW9uYCBhcnJheSB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBzZXBhcmF0ZSBwYXJhZ3JhcGhcclxuICBuYW1lOiAnSnVzdGluIFRvJyxcclxuICBncmVldGluZ0Vtb2ppOiAn8J+RiycsXHJcbiAgcm9sZTogJ1NvZnR3YXJlIERldmVsb3BlcicsXHJcbiAgY29tcGFueTogJycsXHJcbiAgZGVzY3JpcHRpb246IFtcclxuICAgICdBcyBhIHBhc3Npb25hdGUgc29mdHdhcmUsIGdhbWUsIGFuZCB3ZWIgZGV2ZWxvcGVyLCBJIGxvdmUgbWFraW5nIGdhbWVzIGZvciBwZW9wbGUgdG8gZW5qb3ksIGludHVpdGl2ZSBhbmQgYmV1dGlmdWwgd2Vic2l0ZXMsIGFuZCB1c2VyLWZyaWVuZGx5IHVzZWZ1bCBhcHBzLiBNeSBnb2FsIGlzIHRvIGNyZWF0ZSBkaWdpdGFsIHNvbHV0aW9ucyB0aGF0IHBlb3BsZSBsb3ZlIHRvIHVzZSBhbmQgdGhhdCBtYWtlIGEgZGlmZmVyZW5jZS4gQWxzbyBpbnRlcmVzdGVkIGluIEN5YmVyc2VjdXJpdHkgYW5kIEFJLicsXHJcbiAgXSxcclxuICByZXN1bWU6ICdodHRwczovL2p1c3RpbnRvLmRldi9yZXN1bWUucGRmJyxcclxuICBzb2NpYWw6IHtcclxuICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS90b2NqdXN0aW4nLFxyXG4gICAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdG9qdXN0aW4vJyxcclxuICB9LFxyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IFtcclxuICAvLyBwcm9qZWN0cyBjYW4gYmUgYWRkZWQgYW5kIHJlbW92ZWRcclxuICAvLyBpZiB0aGUgYXJyYXkgaXMgbGVmdCBlbXB0eSwgdGhlIFwiUHJvamVjdHNcIiBzZWN0aW9uIHdvbid0IHJlbmRlclxyXG4gIC8vIGVhY2ggZWxlbWVudCBpbiBlYWNoIGBkZXNjcmlwdGlvbmAgYXJyYXkgd2lsbCBiZSB0cmVhdGVkIGFzIGEgc2VwYXJhdGUgcGFyYWdyYXBoXHJcbiAge1xyXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3BsYWNlaG9sZGVyLWltYWdlLmpwZWcnLFxyXG4gICAgbmFtZTogJ1ZhbGlhbnQnLFxyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgJ0EgZmlyc3QgcGVyc29uIHRhY3RpbGUgc2hvb3RlciBnYW1lIHdpdGhpbiBVbnJlYWwgRW5naW5lJyxcclxuICAgIF0sXHJcbiAgICBzdGFjazogWydDKysnLCAnTGVhZCBQcm9ncmFtbWVyJywgJ1VFNScsICdHaXQnLCAnTmV0d29ya2luZycsICdVSScsICdHYW1lcGxheSddLFxyXG4gICAgbGl2ZVByZXZpZXc6ICdodHRwczovL3N0b3JlLnN0ZWFtcG93ZXJlZC5jb20vYXBwLzI0Njg2NTAvVmFsaWFudC8nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3BsYWNlaG9sZGVyLWltYWdlLmpwZWcnLFxyXG4gICAgbmFtZTogJ0Fwb2NhbHlwc2UgUmlzaW5nJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgICdBIHRoaXJkIHBlcnNvbiBvcGVuIHdvcmxkIHN1cnZpdmFsIGdhbWUgd2l0aGluIFVucmVhbCBFbmdpbmUnLFxyXG4gICAgXSxcclxuICAgIHN0YWNrOiBbJ0MrKycsICdMZWFkIFByb2dyYW1tZXInLCAnVUU1JywgJ0dpdCddLFxyXG4gICAgbGl2ZVByZXZpZXc6ICcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3BsYWNlaG9sZGVyLWltYWdlLmpwZWcnLFxyXG4gICAgbmFtZTogJ0V0ZXJuYWwgTGlmZScsXHJcbiAgICBkZXNjcmlwdGlvbjogW1xyXG4gICAgICAnQSB0b3AgZG93biBNTU8gQVJQRyBnYW1lIHdpdGhpbiBVbnJlYWwgRW5naW5lJyxcclxuICAgIF0sXHJcbiAgICBzdGFjazogWydDKysnLCAnTGVhZCBQcm9ncmFtbWVyJywgJ1VFNScsICdHaXQnXSxcclxuICAgIGxpdmVQcmV2aWV3OiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9wbGFjZWhvbGRlci1pbWFnZS5qcGVnJyxcclxuICAgIG5hbWU6ICdBcG90aGVjYXJ5IE5pZ2h0JyxcclxuICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgICdBIGZpcnN0IHBlcnNvbiBob3Jyb3IgZ2FtZSB3aXRoaW4gVW5pdHknLFxyXG4gICAgXSxcclxuICAgIHN0YWNrOiBbJ0MjJywgJ0xlYWQgUHJvZ3JhbW1lcicsICdVbml0eScsICdHaXQnXSxcclxuICAgIGxpdmVQcmV2aWV3OiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9wbGFjZWhvbGRlci1pbWFnZS5qcGVnJyxcclxuICAgIG5hbWU6ICdWYWxvYmxveCcsXHJcbiAgICBkZXNjcmlwdGlvbjogW1xyXG4gICAgICAnQSBmaXJzdCBwZXJzb24gc2hvb3RlciBnYW1lIHdpdGhpbiBSb2Jsb3ggU3R1ZGlvJyxcclxuICAgIF0sXHJcbiAgICBzdGFjazogWydMdWEnLCAnTGVhZCBQcm9ncmFtbWVyJywgJ1JvYmxveCBTdHVkaW8nLCAnU1FMJ10sXHJcbiAgICBsaXZlUHJldmlldzogJ2h0dHBzOi8vd3d3LnJvYmxveC5jb20vZ2FtZXMvOTgxODIxMDIwMy9OZXh1cycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvcGxhY2Vob2xkZXItaW1hZ2UuanBlZycsXHJcbiAgICBuYW1lOiAnRGF5ZHJlYW0nLFxyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgJ0EgcHJvZHVjdGl2aXR5IGFwcCB3aXRoaW4gQW5kcm9pZCBTdHVkaW8nLFxyXG4gICAgXSxcclxuICAgIHN0YWNrOiBbJ0tvdGxpbicsICdBbmRyb2lkIFN0dWRpbyddLFxyXG4gICAgc291cmNlQ29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS90b2NqdXN0aW4vRGF5ZHJlYW0nLFxyXG4gICAgbGl2ZVByZXZpZXc6ICcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3BsYWNlaG9sZGVyLWltYWdlLmpwZWcnLFxyXG4gICAgbmFtZTogJ1NlbnRpbmVsJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgICdBIGRpc2NvcmQgYm90IHRvIG1hbmFnZSBkaXNjb3JkIHNlcnZlcnMnLFxyXG4gICAgXSxcclxuICAgIHN0YWNrOiBbJ1B5dGhvbicsICdTUUwnLCAnQVdTJ10sXHJcbiAgICBsaXZlUHJldmlldzogJycsXHJcbiAgfSxcclxuICAvKntcclxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9wbGFjZWhvbGRlci1pbWFnZS5qcGVnJyxcclxuICAgIG5hbWU6ICdVdG9waWEnLFxyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgJ0FuIEluc3RhZ3JhbSBDbG9uZSBidWlsdCBpbiBSZWFjdCcsXHJcbiAgICBdLFxyXG4gICAgc3RhY2s6IFsnSmF2YVNjcmlwdCcsICdDU1MnLCAnVHlwZVNjcmlwdCcsICdSZWFjdCddLFxyXG4gICAgc291cmNlQ29kZTogJycsXHJcbiAgICBsaXZlUHJldmlldzogJycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvcGxhY2Vob2xkZXItaW1hZ2UuanBlZycsXHJcbiAgICBuYW1lOiAnTmV4dXMnLFxyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgJ0FuIEFtYXpvbiBDbG9uZSBidWlsdCBpbiBOZXh0LmpzJyxcclxuICAgIF0sXHJcbiAgICBzdGFjazogWydKYXZhU2NyaXB0JywgJ0NTUycsICdUeXBlU2NyaXB0JywgJ1JlYWN0J10sXHJcbiAgICBzb3VyY2VDb2RlOiAnJyxcclxuICAgIGxpdmVQcmV2aWV3OiAnJyxcclxuICB9LCovXHJcbiAge1xyXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3BsYWNlaG9sZGVyLWltYWdlLmpwZWcnLFxyXG4gICAgbmFtZTogJ0F1dG8gWm9uZScsXHJcbiAgICBkZXNjcmlwdGlvbjogW1xyXG4gICAgICAnQSBjYXIgYnV5aW5nIHdlYnNpdGUnLFxyXG4gICAgXSxcclxuICAgIHN0YWNrOiBbJ0phdmFTY3JpcHQnLCAnQ1NTJywgJ1R5cGVTY3JpcHQnLCAnUmVhY3QnXSxcclxuICAgIHNvdXJjZUNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vdG9janVzdGluL0NhckZpbmRlcicsXHJcbiAgICBsaXZlUHJldmlldzogJ2NhcmNlbnRlci52ZXJjZWwuYXBwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9wbGFjZWhvbGRlci1pbWFnZS5qcGVnJyxcclxuICAgIG5hbWU6ICdBbnRpLVBoaXNoaW5nIE91dGxvb2sgRXh0ZW5zaW9uJyxcclxuICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgICdEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGFuIE91dGxvb2sgYWRkLWluIGV4dGVuc2lvbiB0aGF0IGVuaGFuY2VzIGVtYWlsIHNlY3VyaXR5IGJ5IGRldGVjdGluZyBwaGlzaGluZyBlbWFpbHMnLFxyXG4gICAgXSxcclxuICAgIHN0YWNrOiBbJ1B5dGhvbicsICdKYXZhU2NyaXB0JywgJ0NTUycsICdIVE1MJ10sXHJcbiAgICBzb3VyY2VDb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL0RwZW5hdGUtQUQyMy9BbnRpUGhpc2gtT3V0bG9vaycsXHJcbiAgICBsaXZlUHJldmlldzogJycsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3Qgc2tpbGxzID0gW1xyXG4gIC8vIHNraWxscyBjYW4gYmUgYWRkZWQgb3IgcmVtb3ZlZFxyXG4gIC8vIGlmIHRoZSBhcnJheSBpcyBsZWZ0IGVtcHR5LCB0aGUgXCJTa2lsbHNcIiBzZWN0aW9uIHdvbid0IHJlbmRlclxyXG4gICdDKysnLFxyXG4gICdDIycsXHJcbiAgJ0MnLFxyXG4gICdMdWEnLFxyXG4gICdIVE1MJyxcclxuICAnQ1NTJyxcclxuICAnSmF2YVNjcmlwdCcsXHJcbiAgJ1R5cGVTY3JpcHQnLFxyXG4gICdSZWFjdCcsXHJcbiAgJ1NRTCcsXHJcbiAgJ0dpdCcsXHJcbl1cclxuXHJcbmNvbnN0IGNvbnRhY3QgPSB7XHJcbiAgLy8gdGhlIGBlbWFpbGAgcHJvcGVydHkgaXMgb3B0aW9uYWwgLSBpdCBjYW4gYmUgbGVmdCBlbXB0eSBvciBkZWxldGVkXHJcbiAgLy8gaWYgc28sIHRoZSBcIkNvbnRhY3RcIiBzZWN0aW9uIHdvbid0IHJlbmRlclxyXG4gIGVtYWlsOiAndG9janVzdGluQGdtYWlsLmNvbScsXHJcbn1cclxuXHJcbmV4cG9ydCB7IGFib3V0LCBwcm9qZWN0cywgc2tpbGxzLCBjb250YWN0IH1cclxuIl0sIm5hbWVzIjpbImFib3V0IiwibmFtZSIsImdyZWV0aW5nRW1vamkiLCJyb2xlIiwiY29tcGFueSIsImRlc2NyaXB0aW9uIiwicmVzdW1lIiwic29jaWFsIiwiZ2l0aHViIiwibGlua2VkaW4iLCJwcm9qZWN0cyIsInRodW1ibmFpbCIsInN0YWNrIiwibGl2ZVByZXZpZXciLCJzb3VyY2VDb2RlIiwic2tpbGxzIiwiY29udGFjdCIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/portfolio.js\n");

/***/ }),

/***/ "./lib/google-analytics.js":
/*!*********************************!*\
  !*** ./lib/google-analytics.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"event\": () => (/* binding */ event),\n/* harmony export */   \"ga_measurement_id\": () => (/* binding */ ga_measurement_id),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\nconst ga_measurement_id = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID;\n// logs page views\nconst pageview = (url)=>{\n    window.gtag(\"config\", ga_measurement_id, {\n        page_path: url\n    });\n};\n// logs specific events\nconst event = ({ action , params  })=>{\n    window.gtag(\"event\", action, params);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ29vZ2xlLWFuYWx5dGljcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxpQkFBaUIsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLCtCQUErQjtBQUU1RSxrQkFBa0I7QUFDWCxNQUFNQyxRQUFRLEdBQUcsQ0FBQ0MsR0FBRyxHQUFLO0lBQy9CQyxNQUFNLENBQUNDLElBQUksQ0FBQyxRQUFRLEVBQUVQLGlCQUFpQixFQUFFO1FBQ3ZDUSxTQUFTLEVBQUVILEdBQUc7S0FDZixDQUFDO0FBQ0osQ0FBQztBQUVELHVCQUF1QjtBQUNoQixNQUFNSSxLQUFLLEdBQUcsQ0FBQyxFQUFFQyxNQUFNLEdBQUVDLE1BQU0sR0FBRSxHQUFLO0lBQzNDTCxNQUFNLENBQUNDLElBQUksQ0FBQyxPQUFPLEVBQUVHLE1BQU0sRUFBRUMsTUFBTSxDQUFDO0FBQ3RDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFuZm9saW8vLi9saWIvZ29vZ2xlLWFuYWx5dGljcy5qcz80ZmIzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnYV9tZWFzdXJlbWVudF9pZCA9IHByb2Nlc3MuZW52LkdPT0dMRV9BTkFMWVRJQ1NfTUVBU1VSRU1FTlRfSURcclxuXHJcbi8vIGxvZ3MgcGFnZSB2aWV3c1xyXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsKSA9PiB7XHJcbiAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIGdhX21lYXN1cmVtZW50X2lkLCB7XHJcbiAgICBwYWdlX3BhdGg6IHVybCxcclxuICB9KVxyXG59XHJcblxyXG4vLyBsb2dzIHNwZWNpZmljIGV2ZW50c1xyXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIHBhcmFtcyB9KSA9PiB7XHJcbiAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCBwYXJhbXMpXHJcbn1cclxuIl0sIm5hbWVzIjpbImdhX21lYXN1cmVtZW50X2lkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9BTkFMWVRJQ1NfTUVBU1VSRU1FTlRfSUQiLCJwYWdldmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwYWdlX3BhdGgiLCJldmVudCIsImFjdGlvbiIsInBhcmFtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/google-analytics.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/portfolio */ \"./data/portfolio.js\");\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/theme */ \"./contexts/theme.js\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/App.css */ \"./styles/App.css\");\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Header.css */ \"./styles/Header.css\");\n/* harmony import */ var _styles_Header_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Navbar.css */ \"./styles/Navbar.css\");\n/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_About_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/About.css */ \"./styles/About.css\");\n/* harmony import */ var _styles_About_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_About_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Projects_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Projects.css */ \"./styles/Projects.css\");\n/* harmony import */ var _styles_Projects_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/ProjectCard.css */ \"./styles/ProjectCard.css\");\n/* harmony import */ var _styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_Skills_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Skills.css */ \"./styles/Skills.css\");\n/* harmony import */ var _styles_Skills_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Skills_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Contact.css */ \"./styles/Contact.css\");\n/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/ScrollToTop.css */ \"./styles/ScrollToTop.css\");\n/* harmony import */ var _styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _styles_Footer_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/Footer.css */ \"./styles/Footer.css\");\n/* harmony import */ var _styles_Footer_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _lib_google_analytics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/google-analytics */ \"./lib/google-analytics.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// google analytics\n\n\n\n// /google analytics\nfunction MyApp({ Component , pageProps  }) {\n    // google analytics\n    // will log page views on route change if new routes are added\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(()=>{\n        if (!_lib_google_analytics__WEBPACK_IMPORTED_MODULE_18__.ga_measurement_id) return;\n        const handleRouteChange = (url)=>(0,_lib_google_analytics__WEBPACK_IMPORTED_MODULE_18__.pageview)(url);\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>router.events.off(\"routeChangeComplete\", handleRouteChange);\n    }, [\n        router.events\n    ]);\n    // /google analytics\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\super\\\\Documents\\\\VSCode\\\\Portfolio\\\\pages\\\\_app.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: _data_portfolio__WEBPACK_IMPORTED_MODULE_2__.about.name || \"Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\super\\\\Documents\\\\VSCode\\\\Portfolio\\\\pages\\\\_app.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\super\\\\Documents\\\\VSCode\\\\Portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_theme__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\super\\\\Documents\\\\VSCode\\\\Portfolio\\\\pages\\\\_app.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\super\\\\Documents\\\\VSCode\\\\Portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ2E7QUFDUTtBQUNyQjtBQUNGO0FBQ0c7QUFDQTtBQUNEO0FBQ0c7QUFDRztBQUNMO0FBQ0M7QUFDSTtBQUNMO0FBQ1Q7QUFFcEIsbUJBQW1CO0FBQ2M7QUFDTTtBQUM4QjtBQUNyRSxvQkFBb0I7QUFFcEIsU0FBU08sS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMsbUJBQW1CO0lBQ25CLDhEQUE4RDtJQUM5RCxNQUFNQyxNQUFNLEdBQUdOLHVEQUFTLEVBQUU7SUFDMUJELGlEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ0UscUVBQWlCLEVBQUUsT0FBTTtRQUM5QixNQUFNTSxpQkFBaUIsR0FBRyxDQUFDQyxHQUFHLEdBQUtOLGdFQUFRLENBQUNNLEdBQUcsQ0FBQztRQUNoREYsTUFBTSxDQUFDRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRUgsaUJBQWlCLENBQUM7UUFDMUQsT0FBTyxJQUFNRCxNQUFNLENBQUNHLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHFCQUFxQixFQUFFSixpQkFBaUIsQ0FBQztJQUMxRSxDQUFDLEVBQUU7UUFBQ0QsTUFBTSxDQUFDRyxNQUFNO0tBQUMsQ0FBQztJQUNuQixvQkFBb0I7SUFFcEIscUJBQ0U7OzBCQUNFLDhEQUFDYixrREFBSTs7a0NBQ0gsOERBQUNnQixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLHFDQUFxQzs7Ozs7NEJBQUc7a0NBQ3RFLDhEQUFDQyxPQUFLO2tDQUFFbEIsdURBQVUsSUFBSSxXQUFXOzs7Ozs0QkFBUzs7Ozs7O29CQUNyQzswQkFDUCw4REFBQ0MsMERBQWE7MEJBQ1osNEVBQUNNLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7O29CQUNkOztvQkFDZixDQUNKO0FBQ0gsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhbmZvbGlvLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuLi9kYXRhL3BvcnRmb2xpbydcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL3RoZW1lJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL0FwcC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL0hlYWRlci5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL05hdmJhci5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL0Fib3V0LmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZXMvUHJvamVjdHMuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9Qcm9qZWN0Q2FyZC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL1NraWxscy5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL0NvbnRhY3QuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9TY3JvbGxUb1RvcC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL0Zvb3Rlci5jc3MnXHJcbmltcG9ydCAnYW5pbWF0ZS5jc3MnXHJcblxyXG4vLyBnb29nbGUgYW5hbHl0aWNzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgZ2FfbWVhc3VyZW1lbnRfaWQsIHBhZ2V2aWV3IH0gZnJvbSAnLi4vbGliL2dvb2dsZS1hbmFseXRpY3MnXHJcbi8vIC9nb29nbGUgYW5hbHl0aWNzXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAvLyBnb29nbGUgYW5hbHl0aWNzXHJcbiAgLy8gd2lsbCBsb2cgcGFnZSB2aWV3cyBvbiByb3V0ZSBjaGFuZ2UgaWYgbmV3IHJvdXRlcyBhcmUgYWRkZWRcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWdhX21lYXN1cmVtZW50X2lkKSByZXR1cm5cclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4gcGFnZXZpZXcodXJsKVxyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgcmV0dXJuICgpID0+IHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgfSwgW3JvdXRlci5ldmVudHNdKVxyXG4gIC8vIC9nb29nbGUgYW5hbHl0aWNzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XHJcbiAgICAgICAgPHRpdGxlPnthYm91dC5uYW1lIHx8ICdQb3J0Zm9saW8nfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiYWJvdXQiLCJUaGVtZVByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2FfbWVhc3VyZW1lbnRfaWQiLCJwYWdldmlldyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJldmVudHMiLCJvbiIsIm9mZiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/About.css":
/*!**************************!*\
  !*** ./styles/About.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/App.css":
/*!************************!*\
  !*** ./styles/App.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Contact.css":
/*!****************************!*\
  !*** ./styles/Contact.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Footer.css":
/*!***************************!*\
  !*** ./styles/Footer.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Header.css":
/*!***************************!*\
  !*** ./styles/Header.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Navbar.css":
/*!***************************!*\
  !*** ./styles/Navbar.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/ProjectCard.css":
/*!********************************!*\
  !*** ./styles/ProjectCard.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Projects.css":
/*!*****************************!*\
  !*** ./styles/Projects.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/ScrollToTop.css":
/*!********************************!*\
  !*** ./styles/ScrollToTop.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Skills.css":
/*!***************************!*\
  !*** ./styles/Skills.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();