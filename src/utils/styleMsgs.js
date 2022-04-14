import chalk from 'chalk';

export const serverUpMessege = (port) => {
    console.log(`[ ${chalk.bgBlueBright('UP')} ] Server listening on http://localhost:${chalk.italic.underline.yellow(port)}`); 
}

export const dbConnectionMessageSucess = (dbName) => {
    console.log(`${chalk.greenBright('✓')} Successful connection with mongodb://localhost:${chalk.italic.underline.yellow('27017')}/${chalk.italic.green(dbName)}`);
}

export const dbConnectionMessageFailure = (dbName, err) => {
    console.error(`${chalk.redBright('✗')} Unsuccessful connection with mongodb://localhost:${chalk.italic.underline.yellow('27017')}/${chalk.italic.green(dbName)}`);
    console.error(`  ${chalk.whiteBright.bgRedBright('Err:')} ${err}`);
}