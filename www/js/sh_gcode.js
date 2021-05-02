if (! this.sh_languages) {
    this.sh_languages = {};
}
sh_languages['gcode'] = [
    [
        [/\((.*?)\)/gm, 'sh_comment', 1],
        [/[^\S];(.*)$/g, 'sh_comment', 1],
        [/\b[O]\d*/gm, 'sh_o', -1],
        [/\b[N]\d*/gm, 'sh_n', -1],
        [/\b[T][^a-zA-Z\s]\d*/gm, 'sh_t', -1],
        [/\b[G][0-9.]*[0-9]*/g, 'sh_g', -1], //      /\b[G][^a-zA-Z\s][0-9.]*[0-9]*/g

        [/^G00$/gm, 'sh_g_rapid', -1],

        [/\b[M][^a-zA-Z\s]\d*/g, 'sh_m', -1],
        [/\b[S][^a-zA-Z\s]\d*/g, 'sh_s', -1],
        [/\b[F][^a-zA-Z\s][0-9.]*[0-9]*/g, 'sh_f', -1],
        [/\b[X][+-]?[\d]*[\.\d]*/g, 'sh_x', -1],
        [/\b[Y][+-]?[\d]*[\.\d]*/g, 'sh_y', -1],
        [/\b[Z][+-]?[\d]*[\.\d]*/g, 'sh_z', -1]
    ],
    [
        [/$/g, null, -2]
    ]
];
