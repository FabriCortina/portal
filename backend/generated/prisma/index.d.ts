
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Collaborator
 * 
 */
export type Collaborator = $Result.DefaultSelection<Prisma.$CollaboratorPayload>
/**
 * Model SheetConfig
 * 
 */
export type SheetConfig = $Result.DefaultSelection<Prisma.$SheetConfigPayload>
/**
 * Model Metric
 * 
 */
export type Metric = $Result.DefaultSelection<Prisma.$MetricPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Collaborators
 * const collaborators = await prisma.collaborator.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Collaborators
   * const collaborators = await prisma.collaborator.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.collaborator`: Exposes CRUD operations for the **Collaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collaborators
    * const collaborators = await prisma.collaborator.findMany()
    * ```
    */
  get collaborator(): Prisma.CollaboratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheetConfig`: Exposes CRUD operations for the **SheetConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SheetConfigs
    * const sheetConfigs = await prisma.sheetConfig.findMany()
    * ```
    */
  get sheetConfig(): Prisma.SheetConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metric`: Exposes CRUD operations for the **Metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metric.findMany()
    * ```
    */
  get metric(): Prisma.MetricDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Collaborator: 'Collaborator',
    SheetConfig: 'SheetConfig',
    Metric: 'Metric'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "collaborator" | "sheetConfig" | "metric"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Collaborator: {
        payload: Prisma.$CollaboratorPayload<ExtArgs>
        fields: Prisma.CollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          findFirst: {
            args: Prisma.CollaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          findMany: {
            args: Prisma.CollaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          create: {
            args: Prisma.CollaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          createMany: {
            args: Prisma.CollaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          delete: {
            args: Prisma.CollaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          update: {
            args: Prisma.CollaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.CollaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollaboratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          upsert: {
            args: Prisma.CollaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          aggregate: {
            args: Prisma.CollaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollaborator>
          }
          groupBy: {
            args: Prisma.CollaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<CollaboratorCountAggregateOutputType> | number
          }
        }
      }
      SheetConfig: {
        payload: Prisma.$SheetConfigPayload<ExtArgs>
        fields: Prisma.SheetConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SheetConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SheetConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetConfigPayload>
          }
          findFirst: {
            args: Prisma.SheetConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SheetConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetConfigPayload>
          }
          findMany: {
            args: Prisma.SheetConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetConfigPayload>[]
          }
          create: {
            args: Prisma.SheetConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetConfigPayload>
          }
          createMany: {
            args: Prisma.SheetConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SheetConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetConfigPayload>[]
          }
          delete: {
            args: Prisma.SheetConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetConfigPayload>
          }
          update: {
            args: Prisma.SheetConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetConfigPayload>
          }
          deleteMany: {
            args: Prisma.SheetConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SheetConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SheetConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetConfigPayload>[]
          }
          upsert: {
            args: Prisma.SheetConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetConfigPayload>
          }
          aggregate: {
            args: Prisma.SheetConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheetConfig>
          }
          groupBy: {
            args: Prisma.SheetConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SheetConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SheetConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SheetConfigCountAggregateOutputType> | number
          }
        }
      }
      Metric: {
        payload: Prisma.$MetricPayload<ExtArgs>
        fields: Prisma.MetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findFirst: {
            args: Prisma.MetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findMany: {
            args: Prisma.MetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          create: {
            args: Prisma.MetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          createMany: {
            args: Prisma.MetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          delete: {
            args: Prisma.MetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          update: {
            args: Prisma.MetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          deleteMany: {
            args: Prisma.MetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          upsert: {
            args: Prisma.MetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          aggregate: {
            args: Prisma.MetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetric>
          }
          groupBy: {
            args: Prisma.MetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricCountArgs<ExtArgs>
            result: $Utils.Optional<MetricCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    collaborator?: CollaboratorOmit
    sheetConfig?: SheetConfigOmit
    metric?: MetricOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Collaborator
   */

  export type AggregateCollaborator = {
    _count: CollaboratorCountAggregateOutputType | null
    _min: CollaboratorMinAggregateOutputType | null
    _max: CollaboratorMaxAggregateOutputType | null
  }

  export type CollaboratorMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    clientId: string | null
    name: string | null
    role: string | null
    dni: string | null
    cuit: string | null
    sooftEmail: string | null
    personalEmail: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollaboratorMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    clientId: string | null
    name: string | null
    role: string | null
    dni: string | null
    cuit: string | null
    sooftEmail: string | null
    personalEmail: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollaboratorCountAggregateOutputType = {
    id: number
    tenantId: number
    clientId: number
    name: number
    role: number
    dni: number
    cuit: number
    sooftEmail: number
    personalEmail: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollaboratorMinAggregateInputType = {
    id?: true
    tenantId?: true
    clientId?: true
    name?: true
    role?: true
    dni?: true
    cuit?: true
    sooftEmail?: true
    personalEmail?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollaboratorMaxAggregateInputType = {
    id?: true
    tenantId?: true
    clientId?: true
    name?: true
    role?: true
    dni?: true
    cuit?: true
    sooftEmail?: true
    personalEmail?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollaboratorCountAggregateInputType = {
    id?: true
    tenantId?: true
    clientId?: true
    name?: true
    role?: true
    dni?: true
    cuit?: true
    sooftEmail?: true
    personalEmail?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborator to aggregate.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collaborators
    **/
    _count?: true | CollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaboratorMaxAggregateInputType
  }

  export type GetCollaboratorAggregateType<T extends CollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaborator[P]>
      : GetScalarType<T[P], AggregateCollaborator[P]>
  }




  export type CollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithAggregationInput | CollaboratorOrderByWithAggregationInput[]
    by: CollaboratorScalarFieldEnum[] | CollaboratorScalarFieldEnum
    having?: CollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaboratorCountAggregateInputType | true
    _min?: CollaboratorMinAggregateInputType
    _max?: CollaboratorMaxAggregateInputType
  }

  export type CollaboratorGroupByOutputType = {
    id: string
    tenantId: string
    clientId: string | null
    name: string
    role: string
    dni: string
    cuit: string
    sooftEmail: string | null
    personalEmail: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CollaboratorCountAggregateOutputType | null
    _min: CollaboratorMinAggregateOutputType | null
    _max: CollaboratorMaxAggregateOutputType | null
  }

  type GetCollaboratorGroupByPayload<T extends CollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], CollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type CollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    clientId?: boolean
    name?: boolean
    role?: boolean
    dni?: boolean
    cuit?: boolean
    sooftEmail?: boolean
    personalEmail?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    clientId?: boolean
    name?: boolean
    role?: boolean
    dni?: boolean
    cuit?: boolean
    sooftEmail?: boolean
    personalEmail?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    clientId?: boolean
    name?: boolean
    role?: boolean
    dni?: boolean
    cuit?: boolean
    sooftEmail?: boolean
    personalEmail?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectScalar = {
    id?: boolean
    tenantId?: boolean
    clientId?: boolean
    name?: boolean
    role?: boolean
    dni?: boolean
    cuit?: boolean
    sooftEmail?: boolean
    personalEmail?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "clientId" | "name" | "role" | "dni" | "cuit" | "sooftEmail" | "personalEmail" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["collaborator"]>

  export type $CollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collaborator"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      clientId: string | null
      name: string
      role: string
      dni: string
      cuit: string
      sooftEmail: string | null
      personalEmail: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collaborator"]>
    composites: {}
  }

  type CollaboratorGetPayload<S extends boolean | null | undefined | CollaboratorDefaultArgs> = $Result.GetResult<Prisma.$CollaboratorPayload, S>

  type CollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollaboratorCountAggregateInputType | true
    }

  export interface CollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collaborator'], meta: { name: 'Collaborator' } }
    /**
     * Find zero or one Collaborator that matches the filter.
     * @param {CollaboratorFindUniqueArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollaboratorFindUniqueArgs>(args: SelectSubset<T, CollaboratorFindUniqueArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollaboratorFindUniqueOrThrowArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, CollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindFirstArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollaboratorFindFirstArgs>(args?: SelectSubset<T, CollaboratorFindFirstArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindFirstOrThrowArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, CollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collaborators
     * const collaborators = await prisma.collaborator.findMany()
     * 
     * // Get first 10 Collaborators
     * const collaborators = await prisma.collaborator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collaboratorWithIdOnly = await prisma.collaborator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollaboratorFindManyArgs>(args?: SelectSubset<T, CollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collaborator.
     * @param {CollaboratorCreateArgs} args - Arguments to create a Collaborator.
     * @example
     * // Create one Collaborator
     * const Collaborator = await prisma.collaborator.create({
     *   data: {
     *     // ... data to create a Collaborator
     *   }
     * })
     * 
     */
    create<T extends CollaboratorCreateArgs>(args: SelectSubset<T, CollaboratorCreateArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collaborators.
     * @param {CollaboratorCreateManyArgs} args - Arguments to create many Collaborators.
     * @example
     * // Create many Collaborators
     * const collaborator = await prisma.collaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollaboratorCreateManyArgs>(args?: SelectSubset<T, CollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collaborators and returns the data saved in the database.
     * @param {CollaboratorCreateManyAndReturnArgs} args - Arguments to create many Collaborators.
     * @example
     * // Create many Collaborators
     * const collaborator = await prisma.collaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collaborators and only return the `id`
     * const collaboratorWithIdOnly = await prisma.collaborator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, CollaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collaborator.
     * @param {CollaboratorDeleteArgs} args - Arguments to delete one Collaborator.
     * @example
     * // Delete one Collaborator
     * const Collaborator = await prisma.collaborator.delete({
     *   where: {
     *     // ... filter to delete one Collaborator
     *   }
     * })
     * 
     */
    delete<T extends CollaboratorDeleteArgs>(args: SelectSubset<T, CollaboratorDeleteArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collaborator.
     * @param {CollaboratorUpdateArgs} args - Arguments to update one Collaborator.
     * @example
     * // Update one Collaborator
     * const collaborator = await prisma.collaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollaboratorUpdateArgs>(args: SelectSubset<T, CollaboratorUpdateArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collaborators.
     * @param {CollaboratorDeleteManyArgs} args - Arguments to filter Collaborators to delete.
     * @example
     * // Delete a few Collaborators
     * const { count } = await prisma.collaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollaboratorDeleteManyArgs>(args?: SelectSubset<T, CollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collaborators
     * const collaborator = await prisma.collaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollaboratorUpdateManyArgs>(args: SelectSubset<T, CollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborators and returns the data updated in the database.
     * @param {CollaboratorUpdateManyAndReturnArgs} args - Arguments to update many Collaborators.
     * @example
     * // Update many Collaborators
     * const collaborator = await prisma.collaborator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collaborators and only return the `id`
     * const collaboratorWithIdOnly = await prisma.collaborator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollaboratorUpdateManyAndReturnArgs>(args: SelectSubset<T, CollaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collaborator.
     * @param {CollaboratorUpsertArgs} args - Arguments to update or create a Collaborator.
     * @example
     * // Update or create a Collaborator
     * const collaborator = await prisma.collaborator.upsert({
     *   create: {
     *     // ... data to create a Collaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collaborator we want to update
     *   }
     * })
     */
    upsert<T extends CollaboratorUpsertArgs>(args: SelectSubset<T, CollaboratorUpsertArgs<ExtArgs>>): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorCountArgs} args - Arguments to filter Collaborators to count.
     * @example
     * // Count the number of Collaborators
     * const count = await prisma.collaborator.count({
     *   where: {
     *     // ... the filter for the Collaborators we want to count
     *   }
     * })
    **/
    count<T extends CollaboratorCountArgs>(
      args?: Subset<T, CollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollaboratorAggregateArgs>(args: Subset<T, CollaboratorAggregateArgs>): Prisma.PrismaPromise<GetCollaboratorAggregateType<T>>

    /**
     * Group by Collaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollaboratorGroupByArgs['orderBy'] }
        : { orderBy?: CollaboratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collaborator model
   */
  readonly fields: CollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collaborator model
   */
  interface CollaboratorFieldRefs {
    readonly id: FieldRef<"Collaborator", 'String'>
    readonly tenantId: FieldRef<"Collaborator", 'String'>
    readonly clientId: FieldRef<"Collaborator", 'String'>
    readonly name: FieldRef<"Collaborator", 'String'>
    readonly role: FieldRef<"Collaborator", 'String'>
    readonly dni: FieldRef<"Collaborator", 'String'>
    readonly cuit: FieldRef<"Collaborator", 'String'>
    readonly sooftEmail: FieldRef<"Collaborator", 'String'>
    readonly personalEmail: FieldRef<"Collaborator", 'String'>
    readonly isActive: FieldRef<"Collaborator", 'Boolean'>
    readonly createdAt: FieldRef<"Collaborator", 'DateTime'>
    readonly updatedAt: FieldRef<"Collaborator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collaborator findUnique
   */
  export type CollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator findUniqueOrThrow
   */
  export type CollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator findFirst
   */
  export type CollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborators.
     */
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator findFirstOrThrow
   */
  export type CollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborators.
     */
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator findMany
   */
  export type CollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Filter, which Collaborators to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }

  /**
   * Collaborator create
   */
  export type CollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * The data needed to create a Collaborator.
     */
    data: XOR<CollaboratorCreateInput, CollaboratorUncheckedCreateInput>
  }

  /**
   * Collaborator createMany
   */
  export type CollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collaborators.
     */
    data: CollaboratorCreateManyInput | CollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collaborator createManyAndReturn
   */
  export type CollaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * The data used to create many Collaborators.
     */
    data: CollaboratorCreateManyInput | CollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collaborator update
   */
  export type CollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * The data needed to update a Collaborator.
     */
    data: XOR<CollaboratorUpdateInput, CollaboratorUncheckedUpdateInput>
    /**
     * Choose, which Collaborator to update.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator updateMany
   */
  export type CollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collaborators.
     */
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Collaborators to update
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to update.
     */
    limit?: number
  }

  /**
   * Collaborator updateManyAndReturn
   */
  export type CollaboratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * The data used to update Collaborators.
     */
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Collaborators to update
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to update.
     */
    limit?: number
  }

  /**
   * Collaborator upsert
   */
  export type CollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * The filter to search for the Collaborator to update in case it exists.
     */
    where: CollaboratorWhereUniqueInput
    /**
     * In case the Collaborator found by the `where` argument doesn't exist, create a new Collaborator with this data.
     */
    create: XOR<CollaboratorCreateInput, CollaboratorUncheckedCreateInput>
    /**
     * In case the Collaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollaboratorUpdateInput, CollaboratorUncheckedUpdateInput>
  }

  /**
   * Collaborator delete
   */
  export type CollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
    /**
     * Filter which Collaborator to delete.
     */
    where: CollaboratorWhereUniqueInput
  }

  /**
   * Collaborator deleteMany
   */
  export type CollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborators to delete
     */
    where?: CollaboratorWhereInput
    /**
     * Limit how many Collaborators to delete.
     */
    limit?: number
  }

  /**
   * Collaborator without action
   */
  export type CollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaborator
     */
    omit?: CollaboratorOmit<ExtArgs> | null
  }


  /**
   * Model SheetConfig
   */

  export type AggregateSheetConfig = {
    _count: SheetConfigCountAggregateOutputType | null
    _min: SheetConfigMinAggregateOutputType | null
    _max: SheetConfigMaxAggregateOutputType | null
  }

  export type SheetConfigMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    spreadsheetId: string | null
    sheetName: string | null
    range: string | null
    updateFrequency: string | null
    lastSyncDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetConfigMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    spreadsheetId: string | null
    sheetName: string | null
    range: string | null
    updateFrequency: string | null
    lastSyncDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetConfigCountAggregateOutputType = {
    id: number
    tenantId: number
    spreadsheetId: number
    sheetName: number
    range: number
    updateFrequency: number
    lastSyncDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SheetConfigMinAggregateInputType = {
    id?: true
    tenantId?: true
    spreadsheetId?: true
    sheetName?: true
    range?: true
    updateFrequency?: true
    lastSyncDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetConfigMaxAggregateInputType = {
    id?: true
    tenantId?: true
    spreadsheetId?: true
    sheetName?: true
    range?: true
    updateFrequency?: true
    lastSyncDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetConfigCountAggregateInputType = {
    id?: true
    tenantId?: true
    spreadsheetId?: true
    sheetName?: true
    range?: true
    updateFrequency?: true
    lastSyncDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SheetConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SheetConfig to aggregate.
     */
    where?: SheetConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetConfigs to fetch.
     */
    orderBy?: SheetConfigOrderByWithRelationInput | SheetConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SheetConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SheetConfigs
    **/
    _count?: true | SheetConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetConfigMaxAggregateInputType
  }

  export type GetSheetConfigAggregateType<T extends SheetConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSheetConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheetConfig[P]>
      : GetScalarType<T[P], AggregateSheetConfig[P]>
  }




  export type SheetConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetConfigWhereInput
    orderBy?: SheetConfigOrderByWithAggregationInput | SheetConfigOrderByWithAggregationInput[]
    by: SheetConfigScalarFieldEnum[] | SheetConfigScalarFieldEnum
    having?: SheetConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetConfigCountAggregateInputType | true
    _min?: SheetConfigMinAggregateInputType
    _max?: SheetConfigMaxAggregateInputType
  }

  export type SheetConfigGroupByOutputType = {
    id: string
    tenantId: string
    spreadsheetId: string
    sheetName: string
    range: string
    updateFrequency: string
    lastSyncDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SheetConfigCountAggregateOutputType | null
    _min: SheetConfigMinAggregateOutputType | null
    _max: SheetConfigMaxAggregateOutputType | null
  }

  type GetSheetConfigGroupByPayload<T extends SheetConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SheetConfigGroupByOutputType[P]>
        }
      >
    >


  export type SheetConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    spreadsheetId?: boolean
    sheetName?: boolean
    range?: boolean
    updateFrequency?: boolean
    lastSyncDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sheetConfig"]>

  export type SheetConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    spreadsheetId?: boolean
    sheetName?: boolean
    range?: boolean
    updateFrequency?: boolean
    lastSyncDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sheetConfig"]>

  export type SheetConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    spreadsheetId?: boolean
    sheetName?: boolean
    range?: boolean
    updateFrequency?: boolean
    lastSyncDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sheetConfig"]>

  export type SheetConfigSelectScalar = {
    id?: boolean
    tenantId?: boolean
    spreadsheetId?: boolean
    sheetName?: boolean
    range?: boolean
    updateFrequency?: boolean
    lastSyncDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SheetConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "spreadsheetId" | "sheetName" | "range" | "updateFrequency" | "lastSyncDate" | "createdAt" | "updatedAt", ExtArgs["result"]["sheetConfig"]>

  export type $SheetConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SheetConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      spreadsheetId: string
      sheetName: string
      range: string
      updateFrequency: string
      lastSyncDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sheetConfig"]>
    composites: {}
  }

  type SheetConfigGetPayload<S extends boolean | null | undefined | SheetConfigDefaultArgs> = $Result.GetResult<Prisma.$SheetConfigPayload, S>

  type SheetConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SheetConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SheetConfigCountAggregateInputType | true
    }

  export interface SheetConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SheetConfig'], meta: { name: 'SheetConfig' } }
    /**
     * Find zero or one SheetConfig that matches the filter.
     * @param {SheetConfigFindUniqueArgs} args - Arguments to find a SheetConfig
     * @example
     * // Get one SheetConfig
     * const sheetConfig = await prisma.sheetConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SheetConfigFindUniqueArgs>(args: SelectSubset<T, SheetConfigFindUniqueArgs<ExtArgs>>): Prisma__SheetConfigClient<$Result.GetResult<Prisma.$SheetConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SheetConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SheetConfigFindUniqueOrThrowArgs} args - Arguments to find a SheetConfig
     * @example
     * // Get one SheetConfig
     * const sheetConfig = await prisma.sheetConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SheetConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SheetConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SheetConfigClient<$Result.GetResult<Prisma.$SheetConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SheetConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetConfigFindFirstArgs} args - Arguments to find a SheetConfig
     * @example
     * // Get one SheetConfig
     * const sheetConfig = await prisma.sheetConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SheetConfigFindFirstArgs>(args?: SelectSubset<T, SheetConfigFindFirstArgs<ExtArgs>>): Prisma__SheetConfigClient<$Result.GetResult<Prisma.$SheetConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SheetConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetConfigFindFirstOrThrowArgs} args - Arguments to find a SheetConfig
     * @example
     * // Get one SheetConfig
     * const sheetConfig = await prisma.sheetConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SheetConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SheetConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SheetConfigClient<$Result.GetResult<Prisma.$SheetConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SheetConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SheetConfigs
     * const sheetConfigs = await prisma.sheetConfig.findMany()
     * 
     * // Get first 10 SheetConfigs
     * const sheetConfigs = await prisma.sheetConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetConfigWithIdOnly = await prisma.sheetConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SheetConfigFindManyArgs>(args?: SelectSubset<T, SheetConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SheetConfig.
     * @param {SheetConfigCreateArgs} args - Arguments to create a SheetConfig.
     * @example
     * // Create one SheetConfig
     * const SheetConfig = await prisma.sheetConfig.create({
     *   data: {
     *     // ... data to create a SheetConfig
     *   }
     * })
     * 
     */
    create<T extends SheetConfigCreateArgs>(args: SelectSubset<T, SheetConfigCreateArgs<ExtArgs>>): Prisma__SheetConfigClient<$Result.GetResult<Prisma.$SheetConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SheetConfigs.
     * @param {SheetConfigCreateManyArgs} args - Arguments to create many SheetConfigs.
     * @example
     * // Create many SheetConfigs
     * const sheetConfig = await prisma.sheetConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SheetConfigCreateManyArgs>(args?: SelectSubset<T, SheetConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SheetConfigs and returns the data saved in the database.
     * @param {SheetConfigCreateManyAndReturnArgs} args - Arguments to create many SheetConfigs.
     * @example
     * // Create many SheetConfigs
     * const sheetConfig = await prisma.sheetConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SheetConfigs and only return the `id`
     * const sheetConfigWithIdOnly = await prisma.sheetConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SheetConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SheetConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SheetConfig.
     * @param {SheetConfigDeleteArgs} args - Arguments to delete one SheetConfig.
     * @example
     * // Delete one SheetConfig
     * const SheetConfig = await prisma.sheetConfig.delete({
     *   where: {
     *     // ... filter to delete one SheetConfig
     *   }
     * })
     * 
     */
    delete<T extends SheetConfigDeleteArgs>(args: SelectSubset<T, SheetConfigDeleteArgs<ExtArgs>>): Prisma__SheetConfigClient<$Result.GetResult<Prisma.$SheetConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SheetConfig.
     * @param {SheetConfigUpdateArgs} args - Arguments to update one SheetConfig.
     * @example
     * // Update one SheetConfig
     * const sheetConfig = await prisma.sheetConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SheetConfigUpdateArgs>(args: SelectSubset<T, SheetConfigUpdateArgs<ExtArgs>>): Prisma__SheetConfigClient<$Result.GetResult<Prisma.$SheetConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SheetConfigs.
     * @param {SheetConfigDeleteManyArgs} args - Arguments to filter SheetConfigs to delete.
     * @example
     * // Delete a few SheetConfigs
     * const { count } = await prisma.sheetConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SheetConfigDeleteManyArgs>(args?: SelectSubset<T, SheetConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SheetConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SheetConfigs
     * const sheetConfig = await prisma.sheetConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SheetConfigUpdateManyArgs>(args: SelectSubset<T, SheetConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SheetConfigs and returns the data updated in the database.
     * @param {SheetConfigUpdateManyAndReturnArgs} args - Arguments to update many SheetConfigs.
     * @example
     * // Update many SheetConfigs
     * const sheetConfig = await prisma.sheetConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SheetConfigs and only return the `id`
     * const sheetConfigWithIdOnly = await prisma.sheetConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SheetConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SheetConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SheetConfig.
     * @param {SheetConfigUpsertArgs} args - Arguments to update or create a SheetConfig.
     * @example
     * // Update or create a SheetConfig
     * const sheetConfig = await prisma.sheetConfig.upsert({
     *   create: {
     *     // ... data to create a SheetConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SheetConfig we want to update
     *   }
     * })
     */
    upsert<T extends SheetConfigUpsertArgs>(args: SelectSubset<T, SheetConfigUpsertArgs<ExtArgs>>): Prisma__SheetConfigClient<$Result.GetResult<Prisma.$SheetConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SheetConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetConfigCountArgs} args - Arguments to filter SheetConfigs to count.
     * @example
     * // Count the number of SheetConfigs
     * const count = await prisma.sheetConfig.count({
     *   where: {
     *     // ... the filter for the SheetConfigs we want to count
     *   }
     * })
    **/
    count<T extends SheetConfigCountArgs>(
      args?: Subset<T, SheetConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SheetConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SheetConfigAggregateArgs>(args: Subset<T, SheetConfigAggregateArgs>): Prisma.PrismaPromise<GetSheetConfigAggregateType<T>>

    /**
     * Group by SheetConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SheetConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SheetConfigGroupByArgs['orderBy'] }
        : { orderBy?: SheetConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SheetConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SheetConfig model
   */
  readonly fields: SheetConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SheetConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SheetConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SheetConfig model
   */
  interface SheetConfigFieldRefs {
    readonly id: FieldRef<"SheetConfig", 'String'>
    readonly tenantId: FieldRef<"SheetConfig", 'String'>
    readonly spreadsheetId: FieldRef<"SheetConfig", 'String'>
    readonly sheetName: FieldRef<"SheetConfig", 'String'>
    readonly range: FieldRef<"SheetConfig", 'String'>
    readonly updateFrequency: FieldRef<"SheetConfig", 'String'>
    readonly lastSyncDate: FieldRef<"SheetConfig", 'DateTime'>
    readonly createdAt: FieldRef<"SheetConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"SheetConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SheetConfig findUnique
   */
  export type SheetConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
    /**
     * Filter, which SheetConfig to fetch.
     */
    where: SheetConfigWhereUniqueInput
  }

  /**
   * SheetConfig findUniqueOrThrow
   */
  export type SheetConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
    /**
     * Filter, which SheetConfig to fetch.
     */
    where: SheetConfigWhereUniqueInput
  }

  /**
   * SheetConfig findFirst
   */
  export type SheetConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
    /**
     * Filter, which SheetConfig to fetch.
     */
    where?: SheetConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetConfigs to fetch.
     */
    orderBy?: SheetConfigOrderByWithRelationInput | SheetConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SheetConfigs.
     */
    cursor?: SheetConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SheetConfigs.
     */
    distinct?: SheetConfigScalarFieldEnum | SheetConfigScalarFieldEnum[]
  }

  /**
   * SheetConfig findFirstOrThrow
   */
  export type SheetConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
    /**
     * Filter, which SheetConfig to fetch.
     */
    where?: SheetConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetConfigs to fetch.
     */
    orderBy?: SheetConfigOrderByWithRelationInput | SheetConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SheetConfigs.
     */
    cursor?: SheetConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SheetConfigs.
     */
    distinct?: SheetConfigScalarFieldEnum | SheetConfigScalarFieldEnum[]
  }

  /**
   * SheetConfig findMany
   */
  export type SheetConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
    /**
     * Filter, which SheetConfigs to fetch.
     */
    where?: SheetConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetConfigs to fetch.
     */
    orderBy?: SheetConfigOrderByWithRelationInput | SheetConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SheetConfigs.
     */
    cursor?: SheetConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetConfigs.
     */
    skip?: number
    distinct?: SheetConfigScalarFieldEnum | SheetConfigScalarFieldEnum[]
  }

  /**
   * SheetConfig create
   */
  export type SheetConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SheetConfig.
     */
    data: XOR<SheetConfigCreateInput, SheetConfigUncheckedCreateInput>
  }

  /**
   * SheetConfig createMany
   */
  export type SheetConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SheetConfigs.
     */
    data: SheetConfigCreateManyInput | SheetConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SheetConfig createManyAndReturn
   */
  export type SheetConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SheetConfigs.
     */
    data: SheetConfigCreateManyInput | SheetConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SheetConfig update
   */
  export type SheetConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SheetConfig.
     */
    data: XOR<SheetConfigUpdateInput, SheetConfigUncheckedUpdateInput>
    /**
     * Choose, which SheetConfig to update.
     */
    where: SheetConfigWhereUniqueInput
  }

  /**
   * SheetConfig updateMany
   */
  export type SheetConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SheetConfigs.
     */
    data: XOR<SheetConfigUpdateManyMutationInput, SheetConfigUncheckedUpdateManyInput>
    /**
     * Filter which SheetConfigs to update
     */
    where?: SheetConfigWhereInput
    /**
     * Limit how many SheetConfigs to update.
     */
    limit?: number
  }

  /**
   * SheetConfig updateManyAndReturn
   */
  export type SheetConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
    /**
     * The data used to update SheetConfigs.
     */
    data: XOR<SheetConfigUpdateManyMutationInput, SheetConfigUncheckedUpdateManyInput>
    /**
     * Filter which SheetConfigs to update
     */
    where?: SheetConfigWhereInput
    /**
     * Limit how many SheetConfigs to update.
     */
    limit?: number
  }

  /**
   * SheetConfig upsert
   */
  export type SheetConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SheetConfig to update in case it exists.
     */
    where: SheetConfigWhereUniqueInput
    /**
     * In case the SheetConfig found by the `where` argument doesn't exist, create a new SheetConfig with this data.
     */
    create: XOR<SheetConfigCreateInput, SheetConfigUncheckedCreateInput>
    /**
     * In case the SheetConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SheetConfigUpdateInput, SheetConfigUncheckedUpdateInput>
  }

  /**
   * SheetConfig delete
   */
  export type SheetConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
    /**
     * Filter which SheetConfig to delete.
     */
    where: SheetConfigWhereUniqueInput
  }

  /**
   * SheetConfig deleteMany
   */
  export type SheetConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SheetConfigs to delete
     */
    where?: SheetConfigWhereInput
    /**
     * Limit how many SheetConfigs to delete.
     */
    limit?: number
  }

  /**
   * SheetConfig without action
   */
  export type SheetConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetConfig
     */
    select?: SheetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetConfig
     */
    omit?: SheetConfigOmit<ExtArgs> | null
  }


  /**
   * Model Metric
   */

  export type AggregateMetric = {
    _count: MetricCountAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  export type MetricMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetricMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetricCountAggregateOutputType = {
    id: number
    tenantId: number
    clientId: number
    marketMetrics: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetricMinAggregateInputType = {
    id?: true
    tenantId?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetricMaxAggregateInputType = {
    id?: true
    tenantId?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetricCountAggregateInputType = {
    id?: true
    tenantId?: true
    clientId?: true
    marketMetrics?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metric to aggregate.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricMaxAggregateInputType
  }

  export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetric[P]>
      : GetScalarType<T[P], AggregateMetric[P]>
  }




  export type MetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithAggregationInput | MetricOrderByWithAggregationInput[]
    by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
    having?: MetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricCountAggregateInputType | true
    _min?: MetricMinAggregateInputType
    _max?: MetricMaxAggregateInputType
  }

  export type MetricGroupByOutputType = {
    id: string
    tenantId: string
    clientId: string
    marketMetrics: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: MetricCountAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  type GetMetricGroupByPayload<T extends MetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricGroupByOutputType[P]>
            : GetScalarType<T[P], MetricGroupByOutputType[P]>
        }
      >
    >


  export type MetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    clientId?: boolean
    marketMetrics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    clientId?: boolean
    marketMetrics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    clientId?: boolean
    marketMetrics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectScalar = {
    id?: boolean
    tenantId?: boolean
    clientId?: boolean
    marketMetrics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "clientId" | "marketMetrics" | "createdAt" | "updatedAt", ExtArgs["result"]["metric"]>

  export type $MetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metric"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      clientId: string
      marketMetrics: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metric"]>
    composites: {}
  }

  type MetricGetPayload<S extends boolean | null | undefined | MetricDefaultArgs> = $Result.GetResult<Prisma.$MetricPayload, S>

  type MetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricCountAggregateInputType | true
    }

  export interface MetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metric'], meta: { name: 'Metric' } }
    /**
     * Find zero or one Metric that matches the filter.
     * @param {MetricFindUniqueArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricFindUniqueArgs>(args: SelectSubset<T, MetricFindUniqueArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricFindUniqueOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricFindFirstArgs>(args?: SelectSubset<T, MetricFindFirstArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metric.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricFindManyArgs>(args?: SelectSubset<T, MetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metric.
     * @param {MetricCreateArgs} args - Arguments to create a Metric.
     * @example
     * // Create one Metric
     * const Metric = await prisma.metric.create({
     *   data: {
     *     // ... data to create a Metric
     *   }
     * })
     * 
     */
    create<T extends MetricCreateArgs>(args: SelectSubset<T, MetricCreateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrics.
     * @param {MetricCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricCreateManyArgs>(args?: SelectSubset<T, MetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metric.
     * @param {MetricDeleteArgs} args - Arguments to delete one Metric.
     * @example
     * // Delete one Metric
     * const Metric = await prisma.metric.delete({
     *   where: {
     *     // ... filter to delete one Metric
     *   }
     * })
     * 
     */
    delete<T extends MetricDeleteArgs>(args: SelectSubset<T, MetricDeleteArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metric.
     * @param {MetricUpdateArgs} args - Arguments to update one Metric.
     * @example
     * // Update one Metric
     * const metric = await prisma.metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricUpdateArgs>(args: SelectSubset<T, MetricUpdateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrics.
     * @param {MetricDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDeleteManyArgs>(args?: SelectSubset<T, MetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricUpdateManyArgs>(args: SelectSubset<T, MetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics and returns the data updated in the database.
     * @param {MetricUpdateManyAndReturnArgs} args - Arguments to update many Metrics.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetricUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metric.
     * @param {MetricUpsertArgs} args - Arguments to update or create a Metric.
     * @example
     * // Update or create a Metric
     * const metric = await prisma.metric.upsert({
     *   create: {
     *     // ... data to create a Metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metric we want to update
     *   }
     * })
     */
    upsert<T extends MetricUpsertArgs>(args: SelectSubset<T, MetricUpsertArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metric.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricCountArgs>(
      args?: Subset<T, MetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

    /**
     * Group by Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricGroupByArgs['orderBy'] }
        : { orderBy?: MetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metric model
   */
  readonly fields: MetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metric model
   */
  interface MetricFieldRefs {
    readonly id: FieldRef<"Metric", 'String'>
    readonly tenantId: FieldRef<"Metric", 'String'>
    readonly clientId: FieldRef<"Metric", 'String'>
    readonly marketMetrics: FieldRef<"Metric", 'Json'>
    readonly createdAt: FieldRef<"Metric", 'DateTime'>
    readonly updatedAt: FieldRef<"Metric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Metric findUnique
   */
  export type MetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findUniqueOrThrow
   */
  export type MetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findFirst
   */
  export type MetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findFirstOrThrow
   */
  export type MetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findMany
   */
  export type MetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric create
   */
  export type MetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data needed to create a Metric.
     */
    data: XOR<MetricCreateInput, MetricUncheckedCreateInput>
  }

  /**
   * Metric createMany
   */
  export type MetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metric createManyAndReturn
   */
  export type MetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metric update
   */
  export type MetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data needed to update a Metric.
     */
    data: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
    /**
     * Choose, which Metric to update.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric updateMany
   */
  export type MetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metric updateManyAndReturn
   */
  export type MetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metric upsert
   */
  export type MetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The filter to search for the Metric to update in case it exists.
     */
    where: MetricWhereUniqueInput
    /**
     * In case the Metric found by the `where` argument doesn't exist, create a new Metric with this data.
     */
    create: XOR<MetricCreateInput, MetricUncheckedCreateInput>
    /**
     * In case the Metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
  }

  /**
   * Metric delete
   */
  export type MetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter which Metric to delete.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric deleteMany
   */
  export type MetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to delete.
     */
    limit?: number
  }

  /**
   * Metric without action
   */
  export type MetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CollaboratorScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    clientId: 'clientId',
    name: 'name',
    role: 'role',
    dni: 'dni',
    cuit: 'cuit',
    sooftEmail: 'sooftEmail',
    personalEmail: 'personalEmail',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollaboratorScalarFieldEnum = (typeof CollaboratorScalarFieldEnum)[keyof typeof CollaboratorScalarFieldEnum]


  export const SheetConfigScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    spreadsheetId: 'spreadsheetId',
    sheetName: 'sheetName',
    range: 'range',
    updateFrequency: 'updateFrequency',
    lastSyncDate: 'lastSyncDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SheetConfigScalarFieldEnum = (typeof SheetConfigScalarFieldEnum)[keyof typeof SheetConfigScalarFieldEnum]


  export const MetricScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    clientId: 'clientId',
    marketMetrics: 'marketMetrics',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CollaboratorWhereInput = {
    AND?: CollaboratorWhereInput | CollaboratorWhereInput[]
    OR?: CollaboratorWhereInput[]
    NOT?: CollaboratorWhereInput | CollaboratorWhereInput[]
    id?: StringFilter<"Collaborator"> | string
    tenantId?: StringFilter<"Collaborator"> | string
    clientId?: StringNullableFilter<"Collaborator"> | string | null
    name?: StringFilter<"Collaborator"> | string
    role?: StringFilter<"Collaborator"> | string
    dni?: StringFilter<"Collaborator"> | string
    cuit?: StringFilter<"Collaborator"> | string
    sooftEmail?: StringNullableFilter<"Collaborator"> | string | null
    personalEmail?: StringNullableFilter<"Collaborator"> | string | null
    isActive?: BoolFilter<"Collaborator"> | boolean
    createdAt?: DateTimeFilter<"Collaborator"> | Date | string
    updatedAt?: DateTimeFilter<"Collaborator"> | Date | string
  }

  export type CollaboratorOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrderInput | SortOrder
    name?: SortOrder
    role?: SortOrder
    dni?: SortOrder
    cuit?: SortOrder
    sooftEmail?: SortOrderInput | SortOrder
    personalEmail?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollaboratorWhereInput | CollaboratorWhereInput[]
    OR?: CollaboratorWhereInput[]
    NOT?: CollaboratorWhereInput | CollaboratorWhereInput[]
    tenantId?: StringFilter<"Collaborator"> | string
    clientId?: StringNullableFilter<"Collaborator"> | string | null
    name?: StringFilter<"Collaborator"> | string
    role?: StringFilter<"Collaborator"> | string
    dni?: StringFilter<"Collaborator"> | string
    cuit?: StringFilter<"Collaborator"> | string
    sooftEmail?: StringNullableFilter<"Collaborator"> | string | null
    personalEmail?: StringNullableFilter<"Collaborator"> | string | null
    isActive?: BoolFilter<"Collaborator"> | boolean
    createdAt?: DateTimeFilter<"Collaborator"> | Date | string
    updatedAt?: DateTimeFilter<"Collaborator"> | Date | string
  }, "id">

  export type CollaboratorOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrderInput | SortOrder
    name?: SortOrder
    role?: SortOrder
    dni?: SortOrder
    cuit?: SortOrder
    sooftEmail?: SortOrderInput | SortOrder
    personalEmail?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollaboratorCountOrderByAggregateInput
    _max?: CollaboratorMaxOrderByAggregateInput
    _min?: CollaboratorMinOrderByAggregateInput
  }

  export type CollaboratorScalarWhereWithAggregatesInput = {
    AND?: CollaboratorScalarWhereWithAggregatesInput | CollaboratorScalarWhereWithAggregatesInput[]
    OR?: CollaboratorScalarWhereWithAggregatesInput[]
    NOT?: CollaboratorScalarWhereWithAggregatesInput | CollaboratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collaborator"> | string
    tenantId?: StringWithAggregatesFilter<"Collaborator"> | string
    clientId?: StringNullableWithAggregatesFilter<"Collaborator"> | string | null
    name?: StringWithAggregatesFilter<"Collaborator"> | string
    role?: StringWithAggregatesFilter<"Collaborator"> | string
    dni?: StringWithAggregatesFilter<"Collaborator"> | string
    cuit?: StringWithAggregatesFilter<"Collaborator"> | string
    sooftEmail?: StringNullableWithAggregatesFilter<"Collaborator"> | string | null
    personalEmail?: StringNullableWithAggregatesFilter<"Collaborator"> | string | null
    isActive?: BoolWithAggregatesFilter<"Collaborator"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Collaborator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Collaborator"> | Date | string
  }

  export type SheetConfigWhereInput = {
    AND?: SheetConfigWhereInput | SheetConfigWhereInput[]
    OR?: SheetConfigWhereInput[]
    NOT?: SheetConfigWhereInput | SheetConfigWhereInput[]
    id?: StringFilter<"SheetConfig"> | string
    tenantId?: StringFilter<"SheetConfig"> | string
    spreadsheetId?: StringFilter<"SheetConfig"> | string
    sheetName?: StringFilter<"SheetConfig"> | string
    range?: StringFilter<"SheetConfig"> | string
    updateFrequency?: StringFilter<"SheetConfig"> | string
    lastSyncDate?: DateTimeNullableFilter<"SheetConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"SheetConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SheetConfig"> | Date | string
  }

  export type SheetConfigOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    spreadsheetId?: SortOrder
    sheetName?: SortOrder
    range?: SortOrder
    updateFrequency?: SortOrder
    lastSyncDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SheetConfigWhereInput | SheetConfigWhereInput[]
    OR?: SheetConfigWhereInput[]
    NOT?: SheetConfigWhereInput | SheetConfigWhereInput[]
    tenantId?: StringFilter<"SheetConfig"> | string
    spreadsheetId?: StringFilter<"SheetConfig"> | string
    sheetName?: StringFilter<"SheetConfig"> | string
    range?: StringFilter<"SheetConfig"> | string
    updateFrequency?: StringFilter<"SheetConfig"> | string
    lastSyncDate?: DateTimeNullableFilter<"SheetConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"SheetConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SheetConfig"> | Date | string
  }, "id">

  export type SheetConfigOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    spreadsheetId?: SortOrder
    sheetName?: SortOrder
    range?: SortOrder
    updateFrequency?: SortOrder
    lastSyncDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SheetConfigCountOrderByAggregateInput
    _max?: SheetConfigMaxOrderByAggregateInput
    _min?: SheetConfigMinOrderByAggregateInput
  }

  export type SheetConfigScalarWhereWithAggregatesInput = {
    AND?: SheetConfigScalarWhereWithAggregatesInput | SheetConfigScalarWhereWithAggregatesInput[]
    OR?: SheetConfigScalarWhereWithAggregatesInput[]
    NOT?: SheetConfigScalarWhereWithAggregatesInput | SheetConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SheetConfig"> | string
    tenantId?: StringWithAggregatesFilter<"SheetConfig"> | string
    spreadsheetId?: StringWithAggregatesFilter<"SheetConfig"> | string
    sheetName?: StringWithAggregatesFilter<"SheetConfig"> | string
    range?: StringWithAggregatesFilter<"SheetConfig"> | string
    updateFrequency?: StringWithAggregatesFilter<"SheetConfig"> | string
    lastSyncDate?: DateTimeNullableWithAggregatesFilter<"SheetConfig"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SheetConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SheetConfig"> | Date | string
  }

  export type MetricWhereInput = {
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    id?: StringFilter<"Metric"> | string
    tenantId?: StringFilter<"Metric"> | string
    clientId?: StringFilter<"Metric"> | string
    marketMetrics?: JsonFilter<"Metric">
    createdAt?: DateTimeFilter<"Metric"> | Date | string
    updatedAt?: DateTimeFilter<"Metric"> | Date | string
  }

  export type MetricOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    marketMetrics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    tenantId?: StringFilter<"Metric"> | string
    clientId?: StringFilter<"Metric"> | string
    marketMetrics?: JsonFilter<"Metric">
    createdAt?: DateTimeFilter<"Metric"> | Date | string
    updatedAt?: DateTimeFilter<"Metric"> | Date | string
  }, "id">

  export type MetricOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    marketMetrics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetricCountOrderByAggregateInput
    _max?: MetricMaxOrderByAggregateInput
    _min?: MetricMinOrderByAggregateInput
  }

  export type MetricScalarWhereWithAggregatesInput = {
    AND?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    OR?: MetricScalarWhereWithAggregatesInput[]
    NOT?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Metric"> | string
    tenantId?: StringWithAggregatesFilter<"Metric"> | string
    clientId?: StringWithAggregatesFilter<"Metric"> | string
    marketMetrics?: JsonWithAggregatesFilter<"Metric">
    createdAt?: DateTimeWithAggregatesFilter<"Metric"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Metric"> | Date | string
  }

  export type CollaboratorCreateInput = {
    id?: string
    tenantId: string
    clientId?: string | null
    name: string
    role: string
    dni: string
    cuit: string
    sooftEmail?: string | null
    personalEmail?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaboratorUncheckedCreateInput = {
    id?: string
    tenantId: string
    clientId?: string | null
    name: string
    role: string
    dni: string
    cuit: string
    sooftEmail?: string | null
    personalEmail?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaboratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    sooftEmail?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    sooftEmail?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorCreateManyInput = {
    id?: string
    tenantId: string
    clientId?: string | null
    name: string
    role: string
    dni: string
    cuit: string
    sooftEmail?: string | null
    personalEmail?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaboratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    sooftEmail?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    sooftEmail?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetConfigCreateInput = {
    id?: string
    tenantId: string
    spreadsheetId: string
    sheetName: string
    range: string
    updateFrequency: string
    lastSyncDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SheetConfigUncheckedCreateInput = {
    id?: string
    tenantId: string
    spreadsheetId: string
    sheetName: string
    range: string
    updateFrequency: string
    lastSyncDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SheetConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    spreadsheetId?: StringFieldUpdateOperationsInput | string
    sheetName?: StringFieldUpdateOperationsInput | string
    range?: StringFieldUpdateOperationsInput | string
    updateFrequency?: StringFieldUpdateOperationsInput | string
    lastSyncDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    spreadsheetId?: StringFieldUpdateOperationsInput | string
    sheetName?: StringFieldUpdateOperationsInput | string
    range?: StringFieldUpdateOperationsInput | string
    updateFrequency?: StringFieldUpdateOperationsInput | string
    lastSyncDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetConfigCreateManyInput = {
    id?: string
    tenantId: string
    spreadsheetId: string
    sheetName: string
    range: string
    updateFrequency: string
    lastSyncDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SheetConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    spreadsheetId?: StringFieldUpdateOperationsInput | string
    sheetName?: StringFieldUpdateOperationsInput | string
    range?: StringFieldUpdateOperationsInput | string
    updateFrequency?: StringFieldUpdateOperationsInput | string
    lastSyncDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    spreadsheetId?: StringFieldUpdateOperationsInput | string
    sheetName?: StringFieldUpdateOperationsInput | string
    range?: StringFieldUpdateOperationsInput | string
    updateFrequency?: StringFieldUpdateOperationsInput | string
    lastSyncDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricCreateInput = {
    id?: string
    tenantId: string
    clientId: string
    marketMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricUncheckedCreateInput = {
    id?: string
    tenantId: string
    clientId: string
    marketMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    marketMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    marketMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricCreateManyInput = {
    id?: string
    tenantId: string
    clientId: string
    marketMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    marketMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    marketMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CollaboratorCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    dni?: SortOrder
    cuit?: SortOrder
    sooftEmail?: SortOrder
    personalEmail?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaboratorMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    dni?: SortOrder
    cuit?: SortOrder
    sooftEmail?: SortOrder
    personalEmail?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaboratorMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    dni?: SortOrder
    cuit?: SortOrder
    sooftEmail?: SortOrder
    personalEmail?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SheetConfigCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    spreadsheetId?: SortOrder
    sheetName?: SortOrder
    range?: SortOrder
    updateFrequency?: SortOrder
    lastSyncDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    spreadsheetId?: SortOrder
    sheetName?: SortOrder
    range?: SortOrder
    updateFrequency?: SortOrder
    lastSyncDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetConfigMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    spreadsheetId?: SortOrder
    sheetName?: SortOrder
    range?: SortOrder
    updateFrequency?: SortOrder
    lastSyncDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MetricCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    marketMetrics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetricMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetricMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}