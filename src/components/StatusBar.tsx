import React from "react";
import styled from "styled-components";
import { GameStatus } from "../containers/MineSweeperContainer";
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    .col {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 10px;
        .count {
            text-align: center;
        }
        &:nth-child(2) {
            cursor: pointer;
        }
    }
`;

type StatusBarProps = {
    mineCount: number;
    gameStatus: string;
    setGameStatus: (status: GameStatus) => void;
    onReset: () => void;
};

export default function StatusBar({
    mineCount,
    gameStatus,
    setGameStatus,
    onReset,
}: StatusBarProps) {
    return (
        <Container>
            <div className="col">
                <div>남은지뢰</div>
                <div className="count">{mineCount}</div>
            </div>
            <div className="col" onClick={onReset}>
                <div>status</div>
                <div>{gameStatus}</div>
            </div>
            <div className="col">시간</div>
        </Container>
    );
}
