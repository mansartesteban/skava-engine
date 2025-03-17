"use strict";const n={UNDEFINED:"'%1' could not be undefined."};class s extends Error{constructor(e){let r=n.UNDEFINED.replace("%1",e);super(r),this.name=self.toString()}}exports.UndefinedError=s;
