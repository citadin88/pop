function startInterval() {
    setInterval(function () {
        var _0x14e2f0 = _0x21d4,
            _0x383d26 = clickTargets[Math[_0x14e2f0(0x198)](Math[_0x14e2f0(0x1a0)]() * clickTargets[_0x14e2f0(0x194)])],
            _0x355f8a = _0x383d26['getBoundingClientRect'](),
            _0x53e9be = _0x355f8a[_0x14e2f0(0x19b)] + Math[_0x14e2f0(0x1a0)]() * _0x355f8a['width'],
            _0x984dc7 = _0x355f8a['top'] + Math[_0x14e2f0(0x1a0)]() * _0x355f8a[_0x14e2f0(0x1a3)];
        simulateMouseClick(_0x53e9be, _0x984dc7);
    }, 0x40);
}

// Execute startInterval when the page loads
window.onload = function () {
    startInterval();
};
