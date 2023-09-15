import { Elysia, t } from "elysia";
import { bearer } from "@elysiajs/bearer";

export const plugin = (app: Elysia) =>
  app.group(
    "/api",
    (app) =>
      app.use(bearer()).guard(
        {
          beforeHandle: ({ bearer, set }) => {
            if (!bearer || bearer != "mohan") {
              set.status = 404;
              return "404: Not Found";
            }
          },
        },
        (app) =>
          app
            .get("/", (_context) => {
              return { message: "API running." };
            })
            .get("/config", (_context) => {
              return {
                components: [
                  "sensor.cpuspeed",
                  "frontend",
                  "config.core",
                  "http",
                  "map",
                  "api",
                  "sun",
                  "config",
                  "discovery",
                  "conversation",
                  "recorder",
                  "group",
                  "sensor",
                  "websocket_api",
                  "automation",
                  "config.automation",
                  "config.customize",
                ],
                config_dir: "/home/ha/.homeassistant",
                elevation: 510,
                latitude: 45.8781529,
                location_name: "Home",
                longitude: 8.458853651,
                time_zone: "Europe/Zurich",
                unit_system: {
                  length: "km",
                  mass: "g",
                  temperature: "\u00b0C",
                  volume: "L",
                },
                version: "0.56.2",
                whitelist_external_dirs: [
                  "/home/ha/.homeassistant/www",
                  "/home/ha/.homeassistant/",
                ],
              };
            }),
      ),

    /*
      .get("/config", (_context) => {
        return {
          components: [
            "sensor.cpuspeed",
            "frontend",
            "config.core",
            "http",
            "map",
            "api",
            "sun",
            "config",
            "discovery",
            "conversation",
            "recorder",
            "group",
            "sensor",
            "websocket_api",
            "automation",
            "config.automation",
            "config.customize",
          ],
          config_dir: "/home/ha/.homeassistant",
          elevation: 510,
          latitude: 45.8781529,
          location_name: "Home",
          longitude: 8.458853651,
          time_zone: "Europe/Zurich",
          unit_system: {
            length: "km",
            mass: "g",
            temperature: "\u00b0C",
            volume: "L",
          },
          version: "0.56.2",
          whitelist_external_dirs: [
            "/home/ha/.homeassistant/www",
            "/home/ha/.homeassistant/",
          ],
        };
      }),
  
*/
  );
