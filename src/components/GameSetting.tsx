import React from "react";
import { GameStatus } from "../containers/MineSweeperContainer";

type GameSettingProps = {
    row: number;
    initialMineCount: number;
    setInitialMineCount: (num: number) => void;
    gameStatus: GameStatus;
    setRow: (num: number) => void;
};

export default function GameSetting({
    gameStatus,
    initialMineCount,
    row,
    setInitialMineCount,
    setRow,
}: GameSettingProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "mineCount") {
            setInitialMineCount(Number(e.target.value));
        } else {
            setRow(Number(e.target.value));
        }
    };
    return (
        <>
            {gameStatus !== "doing" && (
                <>
                    <div>
                        <span>지뢰 수</span>
                        <input
                            value={initialMineCount}
                            type="text"
                            name="mineCount"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <span>열 개수</span>
                        <input
                            value={row}
                            type="text"
                            name="rowCount"
                            onChange={handleChange}
                        />
                    </div>
                </>
            )}
        </>
    );
}
