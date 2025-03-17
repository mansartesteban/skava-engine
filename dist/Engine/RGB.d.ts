export default RGB;
/**
 * A helper class to handle colors with rgba channels
 */
declare class RGB {
    static Black: RGB;
    static White: RGB;
    static Grey: RGB;
    static LightGrey: RGB;
    static DarkGrey: RGB;
    static Red: RGB;
    static Green: RGB;
    static Blue: RGB;
    static Yellow: RGB;
    static Cyan: RGB;
    static Fuchsia: RGB;
    /**
     * @param r The red value of this color from 0 to 255
     * @param g The green value of this color from 0 to 255
     * @param b The blue value of this color from 0 to 255
     * @param opacity The opacity value of this color from 0 to 1
     */
    constructor(r: any, g: any, b: any, opacity: any);
    /**
     * Sets the red channel from 0 to 255
     */
    set r(r: number);
    /**
     * Returns the red channel from 0 to 255
     */
    get r(): number;
    /**
     * Sets the green channel from 0 to 255
     */
    set g(g: number);
    /**
     * Returns the green channel from 0 to 255
     */
    get g(): number;
    /**
     * Sets the blue channel from 0 to 255
     */
    set b(b: number);
    /**
     * Returns the blue channel from 0 to 255
     */
    get b(): number;
    /**
     * Sets the opacity channel from 0 to 1
     */
    set opacity(opacity: number);
    /**
     * Returns the opacity channel from 0 to 1
     */
    get opacity(): number;
    /**
     * Returns an array with splitted rgba channels
     */
    get rgba(): number[];
    /**
     * Returns the hexadecimal representation of this color on 8 bits
     */
    get _toString(): string;
    /**
     * Returns a new Color which is the addition of this color with an other
     * @param color The color to add to this color
     * @returns Color
     */
    add(color: any): RGB;
    /**
     * Returns a new Color which is the multiplication of this color with an other
     * @param color The color to multiply by this color
     * @returns Color
     */
    multiply(color: any): RGB;
    /**
     * Interpolates (linearly) this color to an other color. Calculates a value between those two colors at weight position
     * @param color The other color to interpolate with
     * @param weight The weight of the second vector in the computation. For exemple :
     * 0 => returns the current color,
     * 1 => returns the target color,
     * 0.33 => returns the value of a new color at 33% between this color and the color parameter
     * @returns this Returns this for methods chaining
     */
    lerp(color: any, weight: any, withOpacity?: boolean): this;
    /**
     * Returns a clone of this vector
     * @returns RGB
     */
    clone(): RGB;
    /**
     * Copies the coordinates of a given vector to this vector
     * @param v The vector to be copied
     * @returns this Returns this for methods chaining
     */
    copy(v: any): this;
    #private;
}
