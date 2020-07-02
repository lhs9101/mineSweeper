import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GameStatus } from "../containers/MineSweeperContainer";
const Container = styled.div<{ backRed: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${({ backRed }) => (backRed ? "red" : "none")};
    cursor: pointer;
`;
type MineElementProps = {
    number: number;
    gameStatus: GameStatus;
    setGameStatus: (gameStatus: GameStatus) => void;
    addMineCount: () => void;
    subtractMineCount: () => void;
};
export default function MineElement({
    number,
    gameStatus,
    setGameStatus,
    addMineCount,
    subtractMineCount,
}: MineElementProps) {
    const isMine = number === 10;
    const [show, setShow] = useState(isMine && gameStatus === "fail");
    const [mine, setMine] = useState(false);
    useEffect(() => {
        if (gameStatus === "init") {
            setShow(false);
            setMine(false);
        }
    }, [gameStatus]);
    const handleClick = () => {
        if (mine || gameStatus === "fail") return;
        if (number === 10) return setGameStatus("fail");
        setShow(true);
        setGameStatus("doing");
    };

    const handleRightClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (show === true || gameStatus === "fail") return;
        if (mine === true) addMineCount();
        else subtractMineCount();
        setGameStatus("doing");
        setMine(!mine);
    };
    return (
        <Container
            onClick={handleClick}
            onContextMenu={handleRightClick}
            backRed={mine || (isMine && gameStatus === "fail")}
        >
            {show && number !== 10 && number}
            {(mine || (isMine && gameStatus === "fail")) && "지뢰"}
        </Container>
    );
}
