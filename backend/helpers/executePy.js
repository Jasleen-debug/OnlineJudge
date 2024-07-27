import { exec } from 'child_process'
const executePy = async (filepath) => {
  return new Promise((resolve, reject) => {
    exec(`python "${filepath}"`,
      (error, stdout, stderr) => {
        if (error) {
          reject({error, stderr})
        }
        if (stderr) {
          reject(stderr)
        }
        resolve(stdout)
      }
    )
  })
}

export default executePy