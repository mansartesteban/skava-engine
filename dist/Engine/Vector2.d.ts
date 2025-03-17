export default Vector2;
declare class Vector2 {
    static X: Vector2;
    static Y: Vector2;
    static O: Vector2;
    static ONE: Vector2;
    /**
     * Returns an object with "to" property which is a function that takes as parameters a vector and returns a vector.
     * The usefulness of these function is to return a directional vector between two vectors as so :
     * Vector2.from(origin).to(target);
     * @param origin
     */
    static from(origin: any): {
        to: (target: any) => any;
    };
    constructor(x?: number, y?: number);
    /**
     * Defines the x coordinate of this vector
     */
    set x(x: number);
    /**
     * Returns the x coordinate of this vector
     */
    get x(): number;
    /**
     * Defines the y coordinate of this vector
     */
    set y(y: number);
    /**
     * Returns the y coordinate of this vector
     */
    get y(): number;
    /**
     * Returns the length (or magnitude) of this vector
     */
    get length(): number;
    /**
     * Returns the squared Euclidian distance of this vector
     */
    get squid(): number;
    /**
     * Returns a normalized copy of this vector (a vector with the same direction with a magnitude/length of 1 unit)
     */
    get normalized(): Vector2;
    /**
     * Returns the rotation of this vector (i.e. from origin to this vector, which value is the angle (in radian) between by X axis and this vector)
     * Refer to Rotation doc for more information
     */
    get rotation(): Rotation;
    /**
     * Computes an addition between coordinates of this vector and a number or another vector.
     * If value is a number, adds value to x and y coordinates
     * If value is a vector, adds value.x to x coordinates and value.y to y coordinates
     * @param v Can be a vector or a number
     * @returns this Returns this for methods chaining
     */
    add(value: any): this;
    /**
     * Computes a substraction between coordinates of this vector and a number or another vector.
     * If value is a number, substracts value to x and y coordinates
     * If value is a vector, substracts value.x to x coordinates and value.y to y coordinates
     * @param v Can be a vector or a number
     * @returns this Returns this for methods chaining
     */
    sub(value: any): this;
    /**
     * Computes a division between coordinates of this vector and a number or another vector.
     * If value is a number, divides value to x and y coordinates
     * If value is a vector, divides value.x to x coordinates and value.y to y coordinates
     * @param v Can be a vector or a number
     * @returns this Returns this for methods chaining
     */
    divide(value: any): this;
    /**
     * Computes a multiplication between coordinates of this vector and a number or another vector.
     * If value is a number, multiplies value to x and y coordinates
     * If value is a vector, multiplies value.x to x coordinates and value.y to y coordinates
     * @param v Can be a vector or a number
     * @returns this Returns this for methods chaining
     */
    multiply(value: any): this;
    /**
     * Clamps the magnitude/length of this vector to a maximum.
     * If current length of this vector is smaller than length parameter, the vector remains the same
     * If current length of this vector is greater than length paramter, the vector is limited to this value
     * @param length A maximum magnitude/length that this vector can overtake
     * @returns this Returns this for methods chaining
     */
    clampLength(length: any): this;
    /**
     * Normalizes the vector. It means that the vector will have the same direction but with a magnitude/length of 1 unit
     * @returns this Returns this for methods chaining
     */
    normalize(): this;
    /**
     * Interpolates (linearly) this vector to an other vector. Calculates a point between those two vectors at weight position
     * @param target The other vector to interpolate with
     * @param weight The weight of the second vector in the computation. For exemple :
     * 0 => returns the current vector,
     * 1 => returns the target vector,
     * 0.33 => returns the position of a new vector at 33% between this vector and the target
     * @returns this Returns this for methods chaining
     */
    lerp(target: any, weight: any): this;
    /**
     * Inverts the current vector into the opposite direction
     * @returns this Returns this for methods chaining
     */
    invert(): this;
    /**
     * Rotates the current vector by an angle (given as Rotation object).
     * Refer to Rotation doc for more information
     * @param angle A Rotation object to simplify angle handling
     * @returns this Returns this for methods chaining
     */
    rotate(angle: any): this;
    /**
     * Returns the dot product of this vector and another
     * @param v The other vector to compute with
     * @returns number The result of the dot product between those two vectors
     */
    dot(v: any): number;
    /**
     * Returns a clone of this vector
     * @returns Vector2
     */
    clone(): Vector2;
    /**
     * Copies the coordinates of a given vector to this vector
     * @param v The vector to be copied
     * @returns this Returns this for methods chaining
     */
    copy(v: any): this;
    #private;
}
import { Rotation } from "@/Bundles/Core";
