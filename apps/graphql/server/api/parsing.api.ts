import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { CacheOptions } from '@apollo/datasource-rest/dist/RESTDataSource';
import { ConfigFileRes, ParsersRes } from './parsing.types';
import { Search } from '../arguments/search';
import { prop } from 'ramda';

/**
 * Properties object for configuring a ParsingApi instance.
 * @typedef {Object} ParsingApiProps
 * @property {InMemoryLRUCache} cache - The in-memory LRU cache to use.
 * @property {string} token - The authorization token to use for requests.
 */
export interface ParsingApiProps {
  cache: InMemoryLRUCache;
  token: string;
}

/**
 * A REST data source for interacting with the Parsing Enterprise Tool API.
 */
export class ParsingApi extends RESTDataSource {
  /**
   * The base URL of the Parsing Enterprise Tool API.
   */
  override baseURL = 'https://d-api.parkplacetechnologies.net/parsing-enterprise-tool/v1/';

  /**
   * Encodes a URI component.
   */
  private encode = encodeURIComponent;

  /**
   * The authorization token used for requests.
   */
  private readonly token: string;

  /**
   * Creates an instance of ParsingApi.
   * @param {ParsingApiProps} options - The options object for configuring the data source.
   */
  constructor(options: ParsingApiProps) {
    super({
      cache: options.cache
    });
    this.token = options.token;
  }

  /**
   * Retrieves a list of parser names from the API.
   * @returns {Promise<ParsersRes[]>} - A promise that resolves to an array of parser objects.
   */
  getParsers(): Promise<ParsersRes[]> {
    return this.get("parsers", {
      cacheOptions: {
        ttl: 3600
      }
    });
  }

  /**
   * Retrieves a configuration file from the API.
   * @param {string} id - The ID of the configuration file to retrieve.
   */
  getConfigFile(id: string) {
    return this.get<ConfigFileRes>(`config-files/${this.encode(id)}`);
  }

  /**
   * Returns a list of configuration files for the specified parser.
   * @param {Search} input - The search parameters.
   * @return {Promise<Array<ConfigFile>>} A promise that resolves to an array of ConfigFile objects.
   */
  async getConfigList(input: Search) {
    const params = {
      take: input.take.toString(),
      skip: input.skip.toString(),
      ParserName: input.parserName,
    }
    return prop('configFiles', await this.get("config-files", { params }));
  }

  /**
   * Returns the cache options for this data source.
   * @returns {CacheOptions} - An object containing cache options - defaults to a 3 minute TTL.
   */
  override cacheOptionsFor(): CacheOptions {
    return {
      ttl: 180
    }
  }

  /**
   * Adds an authorization token to the request headers before it is sent.
   * @param {string} _path - The path of the request.
   * @param {AugmentedRequest} request - The request object.
   */
  override willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers['authorization'] = this.token;
  }
}
