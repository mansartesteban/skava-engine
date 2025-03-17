export default Rotation;
/**
 * A helper class which angle rotation (i.e. angle) and simplify conversion to radians or degrees
 */
declare class Rotation {
    static 30: Rotation;
    static 45: Rotation;
    static 90: Rotation;
    static 180: Rotation;
    static 360: Rotation;
    /**
     * @param angle The angle of the rotation, can be in radians or degrees depending on the second parameter
     * @param asRadian Indicates if the give 'angle' is in radians or in degrees
     */
    constructor(angle: any, asRadian: any);
    /**
     * Returns the current angle in radians
     */
    get angle(): any;
    /**
     * Sets the current angle to 'angle' value, have to be in radians
     * @param angle The angle of the rotation, can be in radians or degrees depending on the second parameter
     * @param asRadian Indicates if the give 'angle' is in radians or in degrees
     */
    setAngle(angle: any, asRadian: any): void;
    /**
     * Returns the current angle in radians
     */
    get toRadians(): any;
    /**
     * Returns the current angle in degrees
     */
    get toDegrees(): number;
    /**
     * Adds a rotation to current angle
     * @param rotation The Rotation to add
     * @returns The addition of these two angles
     */
    add(rotation: any): Rotation;
    /**
     * Substracts a rotation to current angle
     * @param rotation The Rotation to substract
     * @returns The substraction of these two angles
     */
    sub(rotation: any): Rotation;
    /**
     * Inverts the angle (multiply by * -1)
     * @returns this Returns this for methods chaining
     */
    invert(): this;
    #private;
}
