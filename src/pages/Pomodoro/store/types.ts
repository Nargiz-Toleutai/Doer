export interface PomodoroState {
    startTime: number | null,
    duration: number | null,
    pauseTime: number | null,
};

export interface PomodoroStartPayload {
    startTime?: number | null,
    duration: number | null,
};