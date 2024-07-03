import type { IContextType } from "./types";
import React from "react";

export const EventContext = React.createContext<IContextType|undefined>(undefined);