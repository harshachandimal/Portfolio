import { Project } from "@/types";
import CodeMindVisual from "./CodeMindVisual";
import DemandFlowVisual from "./DemandFlowVisual";
import FifaVisual from "./FifaVisual";
import AutoFixVisual from "./AutoFixVisual";

const visualMap: Record<Project["visual"], React.ComponentType> = {
  codemind: CodeMindVisual,
  demandflow: DemandFlowVisual,
  fifa: FifaVisual,
  autofix: AutoFixVisual,
};

export default function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  const Visual = visualMap[variant];
  return <Visual />;
}