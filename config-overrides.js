module.exports = function override(config, env) {
    return {
        ...config,
        module: {
            ...config.module,
            rules: [
                ...config.module.rules.map((rule) => {
                    if (rule.oneOf) {
                        return {
                            ...rule,
                            oneOf: [
                                {
                                    test: /\.svg$/,
                                    use: [
                                        {
                                            loader: 'svg-inline-loader',
                                            options: {
                                                removeSVGTagAttrs: true,
                                            },
                                        },
                                    ],
                                },
                                ...rule.oneOf,
                            ],
                        };
                    }
                    return rule;
                }),
            ],
        },
    };
};