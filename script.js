// Simplified JS structure
class SecurityMonitor {
    constructor() {
        this.loopCount = 0;
        this.threatsBlocked = 0;
        this.startMonitoring();
    }
    startMonitoring() {
        setInterval(() => {
            this.loopCount++;
            document.getElementById('loopCount').textContent = this.loopCount;
        }, 1000);
    }
}
const securitySystem = new SecurityMonitor();