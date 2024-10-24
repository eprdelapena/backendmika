var CONNECTIONSTATES;
(function (CONNECTIONSTATES) {
    CONNECTIONSTATES[CONNECTIONSTATES["disconnected"] = 0] = "disconnected";
    CONNECTIONSTATES[CONNECTIONSTATES["connecting"] = 1] = "connecting";
    CONNECTIONSTATES[CONNECTIONSTATES["connected"] = 2] = "connected";
    CONNECTIONSTATES[CONNECTIONSTATES["disconnecting"] = 3] = "disconnecting";
    CONNECTIONSTATES[CONNECTIONSTATES["unknown"] = 99] = "unknown";
})(CONNECTIONSTATES || (CONNECTIONSTATES = {}));
export default CONNECTIONSTATES;
