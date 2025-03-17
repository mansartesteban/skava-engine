import Application from "./Application/Application";
import Viewer from "./Engine/Viewers/Viewer";
import Viewer2d from "./Engine/Viewers/Viewer2d";
import CameraManager from "./Engine/CameraManager";
import Component from "./Engine/Component";
import Observer from "./Engine/Observer";
import Project from "./Engine/Project";
import Scene from "./Engine/Scene";
import Engine from "./Engine/Engine";
import Entity from "./Engine/Entity";
import EntityManager from "./Engine/EntityManager";
import Controls from "./Engine/Controls";
import RGB from "./Engine/RGB";
import Rotation from "./Engine/Rotation";
import Vector2 from "./Engine/Vector2";
import CanvasRenderer from "./Engine/Renderers/CanvasRenderer";
import Renderer from "./Engine/Renderers/Renderer";

import Command from "./Engine/Commands/Command";
import CommandClick from "./Engine/Commands/CommandClick";
import CommandHold from "./Engine/Commands/CommandHold";
import CommandMouseMove from "./Engine/Commands/CommandMouseMove";
import CommandOnce from "./Engine/Commands/CommandOnce";
import CommandSwipe from "./Engine/Commands/CommandSwipe";
import CommandToggle from "./Engine/Commands/CommandToggle";
import CommandTouchMaintain from "./Engine/Commands/CommandTouchMaintain";

import ImplementError from "@errors/ImplementError";
import UndefinedError from "@errors/UndefinedError";
import WrongInstanceError from "@errors/WrongInstanceError";

import Render2DComponent from "./Engine/Components/Render2dComponent";
import TransformComponent from "./Engine/Components/TransformComponent";

import Time from "./Engine/Lib/Time/Time";
import Timer from "./Engine/Lib/Time/Timer";

import Circle from "./Engine/Shapes/Circle";
import CircleScreen from "./Engine/Shapes/CircleScreen";
import DebugVector from "./Engine/Shapes/DebugVector";
import Draw from "./Engine/Shapes/Draw";
import Img from "./Engine/Shapes/Img";
import Line from "./Engine/Shapes/Line";
import MultiLine from "./Engine/Shapes/MultiLine";
import Path from "./Engine/Shapes/Path";
import RoundSquare from "./Engine/Shapes/RoundSquare";
import Sprite from "./Engine/Shapes/Sprite";
import SpriteSequence from "./Engine/Shapes/SpriteSequence";
import Square from "./Engine/Shapes/Square";
import Text from "./Engine/Shapes/Text";

import * as NumericUtils from "./Engine/Lib/Numeric";
import * as ObjectUtils from "./Engine/Lib/Object";

import UIAnimation from "./Engine/UI/Core/UIAnimation";
import UIComponent from "./Engine/UI/Core/UIComponent";
import UIManager from "./Engine/UI/Core/UIManager";
import UIRenderer from "./Engine/UI/Core/UIRenderer";
import UIStyle from "./Engine/UI/Core/UIStyle";
import UIStyleHandler from "./Engine/UI/Core/UIStyleHandler";
import OnClick from "./Engine/UI/Events/OnClick";
import ShakeAnimation from "./Engine/UI/Animations/ShakeAnimation";

import Button from "./Engine/UI/UIComponents/Button/Button";
import Card from "./Engine/UI/UIComponents/Card/Card";
import DebugDiv from "./Engine/UI/UIComponents/DebugDiv/DebugDiv";
import Div from "./Engine/UI/UIComponents/Div/Div";
import Label from "./Engine/UI/UIComponents/Label/Label";
import MainLayout from "./Engine/UI/UIComponents/MainLayout";

// Bundles
const core = {
  Application,
  Viewer,
  Viewer2d,
  CameraManager,
  Component,
  Observer,
  Project,
  Scene,
  Engine,
  Entity,
  EntityManager,
  Controls,
  RGB,
  Rotation,
  Vector2,
  CanvasRenderer,
  Renderer,
  commands: {
    Command,
    CommandClick,
    CommandHold,
    CommandMouseMove,
    CommandOnce,
    CommandSwipe,
    CommandToggle,
    CommandTouchMaintain,
  },
  components: {
    Render2DComponent,
    TransformComponent,
  },
  shapes: {
    Circle,
    CircleScreen,
    DebugVector,
    Draw,
    Img,
    Line,
    MultiLine,
    Path,
    RoundSquare,
    Sprite,
    SpriteSequence,
    Square,
    Text,
  },
};

const utils = {
  Time,
  Timer,
  NumericUtils,
  ObjectUtils,
};

const errors = {
  ImplementError,
  UndefinedError,
  WrongInstanceError,
};

const ui = {
  core: {
    UIAnimation,
    UIComponent,
    UIManager,
    UIRenderer,
    UIStyle,
    UIStyleHandler,
  },
  events: {
    OnClick,
  },
  animations: {
    ShakeAnimation,
  },
  components: {
    Button,
    Card,
    DebugDiv,
    Div,
    Label,
    MainLayout,
  },
};

import "@/Application/Assets/Styles/reset.css";
import "@/Application/Assets/Styles/engine.css";
import "@/Application/Assets/Styles/main.css";

export { core, errors, ui, utils };
