const { readdirSync,  copySync } = require('fs-extra')
const path = require('path');

let projectDir = '../';

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent =>
        dirent.name !== 'nextjs' &&
        dirent.name !== 'docker-hovercraft' &&
        dirent.name !== '.idea' &&
        dirent.name !== '.git'
    )
    .map(dirent => dirent.name)

dirs = getDirectories(projectDir)

dirs.forEach(dir => copySync(`${path.join(projectDir, dir)}/build`, `public/${dir}`, {overwrite: true}))
