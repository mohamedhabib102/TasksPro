(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_Components_Tasks_jsx_3bed6ba8._.js", {

"[project]/app/Components/Tasks.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Tasks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Tasks() {
    _s();
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tasks.useEffect": ()=>{
            const savedTasks = localStorage.getItem("tasksPro");
            try {
                const parsedTasks = JSON.parse(savedTasks);
                if (parsedTasks) {
                    setTasks(parsedTasks);
                } else {
                    setTasks([]);
                }
            } catch (error) {
                console.log("tasks is not found", error);
            }
        }
    }["Tasks.useEffect"], []);
    // delete task
    const deleteTask = (indexEle)=>{
        const taskDelete = tasks.filter((_, i)=>i !== indexEle);
        setTasks(taskDelete);
        localStorage.setItem("tasksPro", JSON.stringify(taskDelete));
    };
    const handleDone = (indexEle)=>{
        const isDoneTasks = localStorage.getItem("isDone");
        const currentDateNow = new Date().toISOString();
        const parsedIsDone = JSON.parse(isDoneTasks) || [];
        localStorage.setItem("isDone", JSON.stringify([
            ...parsedIsDone,
            {
                ...tasks[indexEle],
                dateTaskNow: currentDateNow
            }
        ]));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-2.5 flex flex-col gap-5`,
        children: tasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-[20px] text-[#333] font-semibold uppercase",
            children: "Tasks Is not found"
        }, void 0, false, {
            fileName: "[project]/app/Components/Tasks.jsx",
            lineNumber: 44,
            columnNumber: 36
        }, this) : tasks.map((ele, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: ` ${ele.isDone ? "bg-[#33333352] border-[#3333331a] outline-[#33333300] opacity-50 pointer-events-none select-none cursor-default" : ""}  relative py-3 px-4 rounded-[10px] border-[3px] border-[#fff] bg-[#f2f2f2] outline-[3px] outline-[#eee]`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex justify-end cursor-pointer transition-all colorMain hover:opacity-65 text-[21px] absolute top-3.5 right-3.5 ${ele.isDone ? "pointer-events-auto" : ""}`,
                        onClick: ()=>deleteTask(index),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDelete"], {}, void 0, false, {
                            fileName: "[project]/app/Components/Tasks.jsx",
                            lineNumber: 47,
                            columnNumber: 55
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Tasks.jsx",
                        lineNumber: 46,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "uppercase text-[14px] text-[#333] font-extrabold",
                        children: ele.typeTask
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Tasks.jsx",
                        lineNumber: 48,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "colorMain font-semibold text-[18px] mt-2",
                        children: ele.nameTask
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Tasks.jsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[16px] mb-1.5 text-[#333]",
                        children: ele.descriptionTask
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Tasks.jsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block w-full h-[8px] overflow-hidden rounded-[2px] mb-2 bg-[#fff] relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bgMain absolute transition-all top-0 left-0 h-full",
                            style: {
                                width: `${ele.progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Tasks.jsx",
                            lineNumber: 52,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Tasks.jsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[18px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold mr-2.5 colorMain",
                                children: "Time:"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Tasks.jsx",
                                lineNumber: 58,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-1",
                                children: ele.timeTask || "No Time"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Tasks.jsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this),
                            ele.time || "No Time"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Tasks.jsx",
                        lineNumber: 57,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between flex-wrap max-[991px]:items-start gap-2 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    title: "Done",
                                    className: ` ${ele.isDone ? "text-[#333] cursor-default" : "cursor-pointer hover:opacity-75  colorMain  hover:shadow"} flex gap-2 items-center justify-center py-2 px-2.5 text-[#333] bg-white transition-all rounded-[6px] w-24 font-semibold`,
                                    onClick: ()=>{
                                        const editTask = tasks.map((t, i)=>i === index ? {
                                                ...t,
                                                isDone: t.isDone = true
                                            } : t);
                                        setTasks(editTask);
                                        localStorage.setItem("tasksPro", JSON.stringify(editTask));
                                        handleDone(index);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                            fileName: "[project]/app/Components/Tasks.jsx",
                                            lineNumber: 72,
                                            columnNumber: 29
                                        }, this),
                                        " Done"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Components/Tasks.jsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Tasks.jsx",
                                lineNumber: 63,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-main font-semibold text-[15px]",
                                children: [
                                    ele.progress,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/Tasks.jsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Tasks.jsx",
                        lineNumber: 62,
                        columnNumber: 21
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/app/Components/Tasks.jsx",
                lineNumber: 45,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/Components/Tasks.jsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_s(Tasks, "bBd6yqkqV9dlkj9ENgRyXKaiXpk=");
_c = Tasks;
var _c;
__turbopack_context__.k.register(_c, "Tasks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_Components_Tasks_jsx_3bed6ba8._.js.map