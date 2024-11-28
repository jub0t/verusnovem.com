const isProduction = true;
const Config = {
    siteKey: "",
    backendUrl: !isProduction
        ? ("")
        : "/api/contact.php",
};

export default Config;
