const os = require("os");

const arg = process.argv[2];

switch (arg) {
    case "-h":
        console.log("Help Section:");
        console.log("  -h    : Show help information");
        console.log("  -hn   : Show hostname");
        console.log("  -pf   : Show platform name");
        console.log("  -tp   : Show OS type");
        console.log("  -ar   : Show system architecture");
        console.log("  -v    : Show OS version");
        console.log("  -fm   : Show free memory");
        console.log("  -tm   : Show total memory");
        console.log("  -ni   : Show network interfaces");
        console.log("  -mn   : Show machine name");
        console.log("  -ui   : Show user information");
        console.log("  -up   : Show system uptime (in seconds)");
        break;

    case "-hn":
        console.log("Hostname:", os.hostname());
        break;
    case "-pf":
        console.log("Platform name:", os.platform());
        break;
    case "-tp":
        console.log("OS Type:", os.type());
        break;
    case "-ar":
        console.log("Architecture:", os.arch());
        break;
    case "-v":
        console.log("OS Version:", os.version());
        break;
    case "-fm":
        console.log("Free Memory:", os.freemem());
        break;
    case "-tm":
        console.log("Total Memory:", os.totalmem());
        break;
    case "-ni":
        console.log("Network Interfaces:", os.networkInterfaces());
        break;
    case "-mn":
        // Note: os.machine() is available in Node.js v18+ only
        console.log("Machine Name:", os.machine?.() || "Not supported in this Node version");
        break;
    case "-ui":
        console.log("User Info:", os.userInfo());
        break;
    case "-up":
        console.log("System Uptime (in seconds):", os.uptime());
        break;
    default:
        console.log("Invalid option. Use -h for help.");
        break;
}
