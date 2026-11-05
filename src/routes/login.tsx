import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { authClient, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const { user, isPending } = useCurrentUserState();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onEmail(event: FormEvent) {
    event.preventDefault();
    if (!authEnabled || busy) return;
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
    const result =
      mode === "up"
        ? await authClient.signUp.email({
            email: trimmed,
            password,
            name: name.trim(),
            callbackURL: "/",
          })
        : await authClient.signIn.email({
            email: trimmed,
            password,
            callbackURL: "/",
          });
    if (result.error) {
      setError(result.error.message || (mode === "up" ? "Couldn't create that account." : "Couldn't sign in."));
      setBusy(false);
      return;
    }
    window.location.assign("/");
  }

  return (
    <main className="grid min-h-dvh place-items-center bg-paper px-5 py-10">
      <div className="w-full max-w-md">
        <p className="text-sm font-extrabold text-chili">Sawatdee</p>
        <h1 className="mt-1 text-3xl font-extrabold text-balance">
          <span lang="th" className="thai-display">
            สวัสดี
          </span>
        </h1>
        <p className="mt-2 text-pretty text-muted">Sign in with Google, or with an email and password you choose.</p>

        {isPending ? (
          <div className="mt-6 h-40 animate-pulse rounded-3xl bg-soft" />
        ) : user ? (
          <div className="mt-6 rounded-3xl bg-sheet p-5">
            <p className="font-extrabold">You're signed in{user.primaryEmail ? ` as ${user.primaryEmail}` : ""}.</p>
            <Link
              to="/"
              className="btn-3d btn-chili mt-4 flex min-h-12 items-center justify-center rounded-2xl font-extrabold"
            >
              Back to lessons
            </Link>
          </div>
        ) : authEnabled ? (
          <div className="mt-6 grid gap-4">
            <button
              type="button"
              onClick={() => void signIn("grok-google", { callbackURL: "/" })}
              className="btn-3d btn-chili flex min-h-14 w-full items-center justify-center rounded-2xl font-extrabold"
            >
              Continue with Google
            </button>
            <p className="text-center text-sm font-extrabold text-muted">or use email</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                aria-pressed={mode === "in"}
                onClick={() => {
                  setMode("in");
                  setError(null);
                }}
                className={
                  mode === "in"
                    ? "min-h-11 rounded-2xl bg-ink font-extrabold text-sheet"
                    : "min-h-11 rounded-2xl border-2 border-line font-extrabold"
                }
              >
                Sign in
              </button>
              <button
                type="button"
                aria-pressed={mode === "up"}
                onClick={() => {
                  setMode("up");
                  setError(null);
                }}
                className={
                  mode === "up"
                    ? "min-h-11 rounded-2xl bg-ink font-extrabold text-sheet"
                    : "min-h-11 rounded-2xl border-2 border-line font-extrabold"
                }
              >
                Create account
              </button>
            </div>
            <form onSubmit={onEmail} className="grid gap-3 rounded-3xl bg-sheet p-4">
              {mode === "up" && (
                <label className="grid gap-1 text-sm font-extrabold">
                  Name
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                    className="min-h-12 rounded-2xl border-2 border-line bg-paper px-3 font-bold"
                  />
                </label>
              )}
              <label className="grid gap-1 text-sm font-extrabold">
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  className="min-h-12 rounded-2xl border-2 border-line bg-paper px-3 font-bold"
                />
              </label>
              <label className="grid gap-1 text-sm font-extrabold">
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete={mode === "up" ? "new-password" : "current-password"}
                  className="min-h-12 rounded-2xl border-2 border-line bg-paper px-3 font-bold"
                />
              </label>
              <p className="text-sm text-muted">At least 8 characters.</p>
              {error && <p className="text-sm font-bold text-chili">{error}</p>}
              <button
                type="submit"
                disabled={busy}
                className="btn-3d btn-teal flex min-h-12 items-center justify-center rounded-2xl font-extrabold"
              >
                {busy ? "One moment…" : mode === "up" ? "Create account" : "Sign in"}
              </button>
            </form>
          </div>
        ) : (
          <p className="mt-6 text-sm text-muted">Sign-in is turned off.</p>
        )}
        <p className="mt-6 text-center text-sm font-bold">
          <Link to="/" className="text-muted">
            Continue without an account
          </Link>
        </p>
      </div>
    </main>
  );
}
