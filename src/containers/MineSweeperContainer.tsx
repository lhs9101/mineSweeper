import React, { useState, useEffect } from "react";
import StatusBar from "../components/StatusBar";
import GamePad from "../components/GamePad";
import { make2dMineCountArray, make2dMineArray } from "../util/mine";
import GameSetting from "../components/GameSetting";

export type GameStatus = "complete" | "fail" | "doing" | "init";
export default function MineSweeperContainer() {
    const [initialMineCount, setInitialMineCount] = useState(10);
    const [mineCount, setMineCount] = useState(initialMineCount);
    const handleAddMineCount = () => setMineCount(mineCount + 1);
    const handleSubtractMineCount = () => setMineCount(mineCount - 1);
    const [gameStatus, setGameStatus] = useState<GameStatus>("init");
    const [row, setRow] = useState(10);
    const handleSetGameStatus = (status: GameStatus) => {
        setGameStatus(status);
    };
    const [mineArray, setMineArray] = useState<number[][]>();
    useEffect(() => {
        setMineArray(
            make2dMineCountArray(make2dMineArray(row, initialMineCount))
        );
        setMineCount(initialMineCount);
    }, [row, initialMineCount]);
    const onReset = () => {
        setGameStatus("init");
        setMineArray(
            make2dMineCountArray(make2dMineArray(row, initialMineCount))
        );
    };
    const handleSetInitialMineCount = (num: number) => setInitialMineCount(num);
    const handleSetRow = (num: number) => setRow(num);
    return (
        <>
            <StatusBar
                mineCount={mineCount}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                onReset={onReset}
            ></StatusBar>
            <GamePad
                row={row}
                initialMineCount={initialMineCount}
                gameStatus={gameStatus}
                setGameStatus={handleSetGameStatus}
                addMineCount={handleAddMineCount}
                subtractMineCount={handleSubtractMineCount}
                mineArray={mineArray}
            ></GamePad>
            <GameSetting
                row={row}
                initialMineCount={initialMineCount}
                setInitialMineCount={handleSetInitialMineCount}
                gameStatus={gameStatus}
                setRow={handleSetRow}
            ></GameSetting>
        </>
    );
}
