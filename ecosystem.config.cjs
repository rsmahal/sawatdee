module.exports = {
  apps: [
    {
      name: "sawatdee",
      script: "scripts/with-app-env.mjs",
      args: "vite preview --host 0.0.0.0 --port 3000",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
