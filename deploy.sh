#!/bin/bash
# ── DRIVE ME Website — Quick Deploy to GitHub Pages ──
# Usage: ./deploy.sh "опис змін"

MSG="${1:-update}"
cd "$(dirname "$0")"

git add -A
git commit -m "🚀 $MSG

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push origin main

echo ""
echo "✅ Задеплоєно! Сайт оновиться за ~30 секунд:"
echo "🌐 https://clutchfans34.github.io/driveme-website/"
