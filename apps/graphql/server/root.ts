import { Arg, Args, Ctx, Query, Resolver } from "type-graphql";
import type { Api } from "./apollo";
import { parsingApi } from "./apollo";
import { ConfigurationFile } from "./model/configuration-file";
import { Search } from "./arguments/search";
import { Parser } from "./model/parser";
import { Multi, Of } from "./helpers/utils";
import { prop } from "ramda";

import { EmcVnxe } from "./model/emc-vnxe-parser";
import { EmcSymmetrix } from "./model/emc-symmetrix";
import { DataDomain } from "./model/data-domain";

@Resolver()
export class RootQuery {
  private config(context: Api, id: string) {
    return parsingApi(context)
      .getConfigFile(id);
  }

  @Query(Multi(Parser))
  parsers(@Ctx() context: Api) {
    return parsingApi(context)
      .getParsers();
  }

  @Query(Multi(ConfigurationFile))
  list(@Ctx() context: Api, @Args(Of(Search)) filter: Search) {
    return parsingApi(context)
      .getConfigList(filter);
  }

  @Query(Of(ConfigurationFile))
  configFile(@Ctx() context: Api, @Arg('id') id: string) {
    return this.config(context, id)
      .then(prop('configFile'));
  }

  @Query(Multi(DataDomain))
  async dataDomain(@Ctx() context: Api, @Arg('id') id: string) {
    const { summary } = await this.config(context, id)
    return summary.dataDomainEnclosureSummaries;
  }

  @Query(Multi(EmcSymmetrix))
  async emcSymmetrix(@Ctx() context: Api, @Arg('id') id: string) {
    const { summary } = await this.config(context, id);
    return summary.symmetrixSystems;
  }

  @Query(Of(EmcVnxe))
  async emcVnxe(@Ctx() context: Api, @Arg('id') id: string) {
    const ref = await this.config(context, id);
    return { ...ref.summary };
  }
}
