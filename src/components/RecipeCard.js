import React from 'react';
import PropTypes from 'prop-types'

RecipeCard.propTypes = {
    imageSrc: PropTypes.string,
    border: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    name: PropTypes.string,
    subtext: PropTypes.string,
    expirationDate: PropTypes.string,
}

function RecipeCard ({imageSrc, border, width, height, name, subtext, expirationDate}) {

    return (
        <div className="RecipeCard"
            style={{
                width: width-border*2,
                height: height-border*2,
                background: "url('" + imageSrc + "')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: border
            }}
        >
            <div className="RecipeCard"
                style={{
                    width: width-border*2-10,
                    height: height-border*2-10,
                    backgroundColor: "rgba(256, 256, 256, 0.6)",
                    paddingLeft: 10,
                    paddingTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch'
                }}
            >
                <div
                    style={{
                        flexGrow: 1
                    }}
                >Expires {expirationDate}</div>
                <div
                    style={{
                        flexGrow: 6,

                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <h1 style={{
                        fontStyle: 'italic',
                        fontSize: 60,
                        marginBottom: 0
                    }}>
                        {name}
                    </h1>
                    <h3 style={{
                    fontStyle: 'italic',
                    fontSize: 25,
                    marginTop: 5,
                }}>{subtext}</h3>
                </div>
                <div
                    style={{
                        flexGrow: 3
                    }}
                />
            </div>
        </div>
    );
};

export default RecipeCard;