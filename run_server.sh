#!/usr/bin/env bash
set -euo pipefail

bundle exec jekyll liveserve --force_polling "$@"
