<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<project xmlns="http://grogra.de/registry" graph="graph.xml">
 <import plugin="de.grogra.pf" version="2.1.7"/>
 <import plugin="de.grogra.pointcloud" version="1.9"/>
 <import plugin="de.grogra.math" version="2.1.7"/>
 <import plugin="de.grogra.imp" version="2.1.7"/>
 <import plugin="de.grogra.imp3d" version="2.1.7"/>
 <import plugin="de.grogra.graph.explorer" version="0.8"/>
 <import plugin="de.grogra.rgg" version="2.1.8"/>
 <registry>
  <ref name="project">
   <ref name="objects">
    <ref name="files">
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="Model.rgg" systemId="pfs:Model.rgg"/>
     <de.grogra.pf.ui.registry.SourceDirectory name="param" systemId="pfs:param">
      <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="auxiliary_tools_and_charts.rgg" systemId="pfs:param/auxiliary_tools_and_charts.rgg"/>
      <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters.rgg" systemId="pfs:param/parameters.rgg"/>
      <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters_derived.rgg" systemId="pfs:param/parameters_derived.rgg"/>
     </de.grogra.pf.ui.registry.SourceDirectory>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="initiation.rgg" systemId="pfs:initiation.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="light.rgg" systemId="pfs:light.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="surroundings.rgg" systemId="pfs:surroundings.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="organs.rgg" systemId="pfs:organs.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="plant_level.rgg" systemId="pfs:plant_level.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="crop_level.rgg" systemId="pfs:crop_level.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="photosynthesis.rgg" systemId="pfs:photosynthesis.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="MTG_importer.rgg" systemId="pfs:MTG_importer.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="rewrite_rules.rgg" systemId="pfs:rewrite_rules.rgg"/>
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="updates.rgg" systemId="pfs:updates.rgg"/>
    </ref>
    <ref name="meta">
     <de.grogra.pf.registry.NodeReference name="Model" ref="397497"/>
     <de.grogra.pf.registry.NodeReference name="auxiliary_tools_and_charts" ref="397498"/>
     <de.grogra.pf.registry.NodeReference name="parameters" ref="397499"/>
     <de.grogra.pf.registry.NodeReference name="parameters_derived" ref="397500"/>
     <de.grogra.pf.registry.NodeReference name="initiation" ref="397501"/>
     <de.grogra.pf.registry.NodeReference name="light" ref="397502"/>
     <de.grogra.pf.registry.NodeReference name="surroundings" ref="397503"/>
     <de.grogra.pf.registry.NodeReference name="organs" ref="397504"/>
     <de.grogra.pf.registry.NodeReference name="plant_level" ref="397505"/>
     <de.grogra.pf.registry.NodeReference name="crop_level" ref="397506"/>
     <de.grogra.pf.registry.NodeReference name="photosynthesis" ref="397507"/>
     <de.grogra.pf.registry.NodeReference name="MTG_importer" ref="397508"/>
     <de.grogra.pf.registry.NodeReference name="rewrite_rules" ref="397509"/>
     <de.grogra.pf.registry.NodeReference name="updates" ref="397510"/>
    </ref>
    <ref name="secgraphs">
     <de.grogra.pf.ui.registry.ProjectFileObjectItem fileMimeType="application/x-grogra-graph+xml" mimeType="application/x-secgraph" name="tmp" systemId="pfs:secgraphs/tmp" type="de.grogra.graph.object.sg.impl.SecGraphImpl"/>
    </ref>
   </ref>
   <ref name="layouts">
    <de.grogra.pf.ui.registry.Layout name="Layout">
     <de.grogra.pf.ui.registry.MainWindow name="_">
      <de.grogra.pf.ui.registry.Split location="0.48046649" name="_">
       <de.grogra.pf.ui.registry.Split location="0.5427928" name="_" orientation="0">
        <de.grogra.pf.ui.registry.Split name="_" orientation="0">
         <de.grogra.pf.registry.Link name="_" source="/ui/panels/rgg/toolbar"/>
         <de.grogra.pf.ui.registry.PanelFactory name="_0" source="/ui/panels/3d/defaultview">
          <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/3d/defaultview"/>
          <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="View"/>
          <de.grogra.pf.registry.Option name="view" type="de.grogra.imp3d.View3D" value="graphDescriptor=[de.grogra.imp.ProjectGraphDescriptor]visibleScales={true true true true true true true true true true true true true true true}visibleLayers={true true true true true true true true true true true true true true true true}epsilon=1.0E-6 visualEpsilon=0.01 magnitude=1.0 camera=(minZ=0.1 maxZ=2000.0 projection=[de.grogra.imp3d.PerspectiveProjection aspect=1.0 fieldOfView=0.04487474]transformation=(-0.16613266056744316 -0.9861034119669119 0.0 0.7277905086453013 0.04475190789627104 -0.007539527228131197 0.9989696803550943 -0.15708642999445163 -0.9850874102496826 0.16596149082360823 0.04538257078636872 -15.41530786131192 0.0 0.0 0.0 1.0))eventFactory=[de.grogra.pointcloud.navigation.PointCloudView3DEventManager]"/>
         </de.grogra.pf.ui.registry.PanelFactory>
        </de.grogra.pf.ui.registry.Split>
        <de.grogra.pf.ui.registry.Split name="_0" orientation="0">
         <de.grogra.pf.ui.registry.Tab name="_" selectedIndex="0">
          <de.grogra.pf.registry.Link name="_" source="/ui/panels/fileexplorer"/>
          <de.grogra.pf.registry.Link name="_0" source="/ui/panels/objects/meta"/>
         </de.grogra.pf.ui.registry.Tab>
         <de.grogra.pf.registry.Link name="_0" source="/ui/panels/statusbar"/>
        </de.grogra.pf.ui.registry.Split>
       </de.grogra.pf.ui.registry.Split>
       <de.grogra.pf.ui.registry.Split location="0.6539039" name="_0" orientation="0">
        <de.grogra.pf.ui.registry.Tab name="_" selectedIndex="0">
         <de.grogra.pf.ui.registry.PanelFactory name="_" source="/ui/panels/texteditor">
          <de.grogra.pf.registry.Option name="documents" type="java.lang.String" value="&quot;\&quot;pfs:param/auxiliary_tools_and_charts.rgg\&quot;,\&quot;pfs:crop_level.rgg\&quot;,\&quot;pfs:initiation.rgg\&quot;,\&quot;pfs:light.rgg\&quot;,\&quot;pfs:Model.rgg\&quot;,\&quot;pfs:MTG_importer.rgg\&quot;,\&quot;pfs:organs.rgg\&quot;,\&quot;pfs:param/parameters.rgg\&quot;,\&quot;pfs:param/parameters_derived.rgg\&quot;,\&quot;pfs:photosynthesis.rgg\&quot;,\&quot;pfs:plant_level.rgg\&quot;,\&quot;pfs:rewrite_rules.rgg\&quot;,\&quot;pfs:surroundings.rgg\&quot;,\&quot;pfs:Untitled-1\&quot;,\&quot;pfs:updates.rgg\&quot;&quot;"/>
          <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/texteditor"/>
          <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="jEdit - parameters.rgg"/>
          <de.grogra.pf.registry.Option name="selected" type="java.lang.String" value="pfs:param/parameters.rgg"/>
         </de.grogra.pf.ui.registry.PanelFactory>
         <de.grogra.pf.registry.Link name="_0" source="/ui/panels/attributeeditor"/>
        </de.grogra.pf.ui.registry.Tab>
        <de.grogra.pf.ui.registry.Tab name="_0" selectedIndex="1">
         <de.grogra.pf.registry.Link name="_" source="/ui/panels/log"/>
         <de.grogra.pf.registry.Link name="_0" source="/ui/panels/rgg/console"/>
        </de.grogra.pf.ui.registry.Tab>
       </de.grogra.pf.ui.registry.Split>
      </de.grogra.pf.ui.registry.Split>
     </de.grogra.pf.ui.registry.MainWindow>
     <de.grogra.pf.ui.registry.FloatingWindow height="703" name="_0" width="1734">
      <de.grogra.pf.registry.Link name="_" source="/ui/doc/helpButton"/>
     </de.grogra.pf.ui.registry.FloatingWindow>
    </de.grogra.pf.ui.registry.Layout>
   </ref>
  </ref>
  <ref name="workbench">
   <ref name="state">
    <de.grogra.pf.ui.registry.Layout name="layout">
     <de.grogra.pf.ui.registry.MainWindow>
      <de.grogra.pf.ui.registry.Split location="0.4665793">
       <de.grogra.pf.ui.registry.Split location="0.54473686" orientation="0">
        <de.grogra.pf.ui.registry.Split orientation="0">
         <de.grogra.pf.registry.Link source="/ui/panels/rgg/toolbar"/>
         <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/3d/defaultview">
          <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/3d/defaultview"/>
          <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="View"/>
          <de.grogra.pf.registry.Option name="view" type="de.grogra.imp3d.View3D" value="graphDescriptor=[de.grogra.imp.ProjectGraphDescriptor]visibleScales={true true true true true true true true true true true true true true true}visibleLayers={true true true true true true true true true true true true true true true true}epsilon=1.0E-6 visualEpsilon=0.01 magnitude=1.0 camera=(minZ=0.1 maxZ=2000.0 projection=[de.grogra.imp3d.PerspectiveProjection aspect=1.0 fieldOfView=0.4658546]transformation=(-0.45260642710944293 0.8917103914047758 0.0 -0.01656209387868437 -0.04492154377376625 -0.022800877531160633 0.9987302813516186 0.1536691079104086 0.8905781700918713 0.45203174428857334 0.05037683109534535 -5.310071331362989 0.0 0.0 0.0 1.0))eventFactory=[de.grogra.pointcloud.navigation.PointCloudView3DEventManager]"/>
         </de.grogra.pf.ui.registry.PanelFactory>
        </de.grogra.pf.ui.registry.Split>
        <de.grogra.pf.ui.registry.Split orientation="0">
         <de.grogra.pf.ui.registry.Tab selectedIndex="0">
          <de.grogra.pf.registry.Link source="/ui/panels/fileexplorer"/>
          <de.grogra.pf.registry.Link source="/ui/panels/objects/meta"/>
         </de.grogra.pf.ui.registry.Tab>
         <de.grogra.pf.registry.Link source="/ui/panels/statusbar"/>
        </de.grogra.pf.ui.registry.Split>
       </de.grogra.pf.ui.registry.Split>
       <de.grogra.pf.ui.registry.Split location="0.5605263" orientation="0">
        <de.grogra.pf.ui.registry.Tab selectedIndex="0">
         <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/texteditor">
          <de.grogra.pf.registry.Option name="documents" type="java.lang.String" value="&quot;\&quot;pfs:Untitled-1\&quot;&quot;"/>
          <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/texteditor"/>
          <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="jEdit - Untitled-1"/>
          <de.grogra.pf.registry.Option name="selected" type="java.lang.String" value="pfs:Untitled-1"/>
         </de.grogra.pf.ui.registry.PanelFactory>
         <de.grogra.pf.registry.Link source="/ui/panels/attributeeditor"/>
        </de.grogra.pf.ui.registry.Tab>
        <de.grogra.pf.ui.registry.Split location="0.4738806">
         <de.grogra.pf.registry.Link source="/ui/panels/rgg/console"/>
         <de.grogra.pf.registry.Link source="/ui/panels/log"/>
        </de.grogra.pf.ui.registry.Split>
       </de.grogra.pf.ui.registry.Split>
      </de.grogra.pf.ui.registry.Split>
     </de.grogra.pf.ui.registry.MainWindow>
    </de.grogra.pf.ui.registry.Layout>
   </ref>
  </ref>
 </registry>
</project>
