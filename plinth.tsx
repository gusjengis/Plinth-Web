import "./plinth.css";

// Wait for wasm_bindgen functions to load so they can be called without worrying about errors
declare var window: any;

export function waitForWasm(callback: () => void, interval: number = 50, timeout: number = 5000): void {
    const start = Date.now();

    const check = () => {
        if ((window as any).wasmBindings) {
            callback();
        } else if (Date.now() - start < timeout) {
            setTimeout(check, interval);
        } else {
            console.error("Timeout: wasmBindings not found");
        }
    };

    check();
}

