import { o as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useCurrentUserState, n as signIn, t as authClient } from "./use-current-user-IbbRlbZj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-Dnu0DGYf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const { user, isPending } = useCurrentUserState();
	const [mode, setMode] = (0, import_react.useState)("in");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onEmail(event) {
		event.preventDefault();
		if (busy) return;
		const trimmed = email.trim();
		if (!trimmed.includes("@") || !trimmed.includes(".")) {
			setError("Enter a real email address.");
			return;
		}
		if (password.length < 8) {
			setError("Use at least 8 characters.");
			return;
		}
		if (mode === "up" && name.trim().length === 0) {
			setError("Add the name you want on the account.");
			return;
		}
		setBusy(true);
		setError(null);
		const result = mode === "up" ? await authClient.signUp.email({
			email: trimmed,
			password,
			name: name.trim(),
			callbackURL: "/"
		}) : await authClient.signIn.email({
			email: trimmed,
			password,
			callbackURL: "/"
		});
		if (result.error) {
			setError(result.error.message || (mode === "up" ? "Couldn't create that account." : "Couldn't sign in."));
			setBusy(false);
			return;
		}
		window.location.assign("/");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-paper px-5 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-extrabold text-chili",
					children: "Sawatdee"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-3xl font-extrabold text-balance",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: "th",
						className: "thai-display",
						children: "สวัสดี"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-pretty text-muted",
					children: "Sign in with Google, or with an email and password you choose."
				}),
				isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-40 animate-pulse rounded-3xl bg-soft" }) : user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-3xl bg-sheet p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-extrabold",
						children: [
							"You're signed in",
							user.primaryEmail ? ` as ${user.primaryEmail}` : "",
							"."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-3d btn-chili mt-4 flex min-h-12 items-center justify-center rounded-2xl font-extrabold",
						children: "Back to lessons"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void signIn("grok-google", { callbackURL: "/" }),
							className: "btn-3d btn-chili flex min-h-14 w-full items-center justify-center rounded-2xl font-extrabold",
							children: "Continue with Google"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-sm font-extrabold text-muted",
							children: "or use email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": mode === "in",
								onClick: () => {
									setMode("in");
									setError(null);
								},
								className: mode === "in" ? "min-h-11 rounded-2xl bg-ink font-extrabold text-sheet" : "min-h-11 rounded-2xl border-2 border-line font-extrabold",
								children: "Sign in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": mode === "up",
								onClick: () => {
									setMode("up");
									setError(null);
								},
								className: mode === "up" ? "min-h-11 rounded-2xl bg-ink font-extrabold text-sheet" : "min-h-11 rounded-2xl border-2 border-line font-extrabold",
								children: "Create account"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: onEmail,
							className: "grid gap-3 rounded-3xl bg-sheet p-4",
							children: [
								mode === "up" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-1 text-sm font-extrabold",
									children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: name,
										onChange: (event) => setName(event.target.value),
										autoComplete: "name",
										className: "min-h-12 rounded-2xl border-2 border-line bg-paper px-3 font-bold"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-1 text-sm font-extrabold",
									children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										value: email,
										onChange: (event) => setEmail(event.target.value),
										autoComplete: "email",
										className: "min-h-12 rounded-2xl border-2 border-line bg-paper px-3 font-bold"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-1 text-sm font-extrabold",
									children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										value: password,
										onChange: (event) => setPassword(event.target.value),
										autoComplete: mode === "up" ? "new-password" : "current-password",
										className: "min-h-12 rounded-2xl border-2 border-line bg-paper px-3 font-bold"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: "At least 8 characters."
								}),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-chili",
									children: error
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: busy,
									className: "btn-3d btn-teal flex min-h-12 items-center justify-center rounded-2xl font-extrabold",
									children: busy ? "One moment…" : mode === "up" ? "Create account" : "Sign in"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-sm font-bold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-muted",
						children: "Continue without an account"
					})
				})
			]
		})
	});
}
//#endregion
export { Login as component };
