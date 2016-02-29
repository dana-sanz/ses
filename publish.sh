#!/bin/sh
git push origin master
ssh ses@ssh.ocf.berkeley.edu <<'ENDSSH' 
  cd public_html
  git pull origin master
ENDSSH

