.firework {
    position: fixed;
    width: 10px;
    height: 10px;
    z-index: 2;

    animation:
        burst 2.8s ease-out infinite;
}

.firework span {
    position: absolute;

    width: 4px;
    height: 55px;

    border-radius: 50%;

    background: linear-gradient(
        white,
        #ffd700,
        #ff4fa3
    );

    transform-origin: 50% 100%;
}

.firework span:nth-child(1) {
    transform: rotate(0deg);
}

.firework span:nth-child(2) {
    transform: rotate(45deg);
}

.firework span:nth-child(3) {
    transform: rotate(90deg);
}

.firework span:nth-child(4) {
    transform: rotate(135deg);
}

.firework span:nth-child(5) {
    transform: rotate(180deg);
}

.firework span:nth-child(6) {
    transform: rotate(225deg);
}

.firework span:nth-child(7) {
    transform: rotate(270deg);
}

.firework span:nth-child(8) {
    transform: rotate(315deg);
}

@keyframes burst {

    0% {
        transform: scale(.1);
        opacity: 0;
    }

    20% {
        transform: scale(.5);
        opacity: 1;
    }

    55% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(2.2);
        opacity: 0;
    }
}
