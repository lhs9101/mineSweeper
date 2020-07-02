import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GameStatus } from "../containers/MineSweeperContainer";
import MineElement from "./MineElement";
import { make2dMineCountArray, make2dMineArray } from "../util/mine";

type GamePadProps = {
    row: number;
    initialMineCount: number;
    gameStatus: GameStatus;
    setGameStatus: (status: GameStatus) => void;
    addMineCount: () => void;
    subtractMineCount: () => void;
    mineArray: number[][] | undefined;
};
type ContainerProps = {
    row: number;
    gameStatus: GameStatus;
};
const Container = styled.table<ContainerProps>`
    width: 100vw;
    border-collapse: collapse;
    .el {
        position: relative;
        border: 1px solid black;
        text-align: center;
        width: ${({ row }) => 100 / row}%;
        padding-bottom: calc(${({ row }) => 100 / row}% - 2px);
        box-sizing: border-box;
    }
`;
export default function GamePad({
    row,
    mineArray,
    gameStatus,
    setGameStatus,
    addMineCount,
    subtractMineCount,
}: GamePadProps) {
    return (
        <Container row={row} gameStatus={gameStatus}>
            <tbody>
                {mineArray &&
                    mineArray.map((arr, i) => (
                        <tr className="row" key={"row" + i}>
                            {arr.map((number, j) => (
                                <td className="el" key={i * arr.length + j}>
                                    <MineElement
                                        number={number}
                                        gameStatus={gameStatus}
                                        setGameStatus={setGameStatus}
                                        addMineCount={addMineCount}
                                        subtractMineCount={subtractMineCount}
                                    ></MineElement>
                                </td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </Container>
    );
}
