/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * custom-webpack.config.js
 *
 */

const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        API_URL: JSON.stringify(process.env.API_URL),
        NETWORK_NAME: JSON.stringify(process.env.NETWORK_NAME),
        NETWORK_TOKEN_SYMBOL: JSON.stringify(process.env.NETWORK_TOKEN_SYMBOL),
        NETWORK_TOKEN_DECIMALS: JSON.stringify(process.env.NETWORK_TOKEN_DECIMALS)
      }
    })
  ]
};
