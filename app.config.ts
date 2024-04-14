/**
 * Do not put any secret values inside app.config file. It is exposed to the user client bundle.
 */
import config from "~/data/app-config.json";
export default defineAppConfig(config);
